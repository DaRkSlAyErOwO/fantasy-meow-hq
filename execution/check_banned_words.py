#!/usr/bin/env python3
"""
Deterministic tool to check for banned words in project files.
Based on Section 2.3 of FANTASY-MEOWS-WEBSITE-REFERENCE.md.
"""

import os
import re
import sys
import argparse

# Strict banned words/patterns (zero hits anywhere in public code/content)
STRICT_BANNED = [
    (r"\b(ai|a\.i\.)\b", "AI / A.I."),
    (r"\b(bot|automated|automation|ai-generated|machine-made)\b", "bot/automation"),
    (r"\b(hand-drawn|hand-made|handmade|hand-crafted|human-made)\b", "art creation claims"),
    (r"\b(ethereum|solana|polygon)\b", "named crypto chains"),
    (r"\bconnect\s+wallet\b", "connect wallet"),
    (r"\b(\$meow|\$whisk)\b", "unannounced tokens"),
]

def scan_file(filepath):
    findings = []
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        for line_num, line in enumerate(f, 1):
            for pattern, desc in STRICT_BANNED:
                if re.search(pattern, line, re.IGNORECASE):
                    findings.append((filepath, line_num, desc, line.strip()))
    return findings

def scan_directory(target_dir):
    all_findings = []
    for root, _, files in os.walk(target_dir):
        # Skip node_modules, git, execution, directives, skills, .next, out, and temp
        normalized_root = root.replace("\\", "/").split("/")
        if any(skip in normalized_root for skip in ["node_modules", ".git", ".tmp", "dist", "execution", "directives", "skills", ".next", "out"]):
            continue
        for file in files:
            if file in ["package-lock.json", "package.json"]:
                continue
            if file.endswith((".ts", ".tsx", ".js", ".jsx", ".html", ".astro", ".json", ".md")):
                # Do not scan reference docs or agent mirrors
                if file.startswith("FANTASY-MEOWS-WEBSITE-REFERENCE") or file in ["agent.md", "CLAUDE.md", "AGENTS.md", "GEMINI.md"]:
                    continue
                path = os.path.join(root, file)
                all_findings.extend(scan_file(path))
    return all_findings

def main():
    # Force UTF-8 on Windows stdout if possible
    if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')

    parser = argparse.ArgumentParser(description="Audit site files for banned words.")
    parser.add_argument("--target", default="src", help="Directory or file to audit (defaults to 'src')")
    args = parser.parse_args()

    print(f"Scanning '{args.target}' for banned terms...")
    findings = scan_directory(args.target)

    if findings:
        print(f"FAILED: Found {len(findings)} potential banned term occurrences:")
        for path, line_no, desc, snippet in findings:
            clean_snippet = snippet.encode('ascii', errors='replace').decode('ascii')
            print(f"  [{desc}] {path}:{line_no} -> {clean_snippet[:80]}")
        sys.exit(1)
    else:
        print("PASSED: Zero strictly banned words detected.")
        sys.exit(0)

if __name__ == "__main__":
    main()

