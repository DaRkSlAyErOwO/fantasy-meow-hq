#!/usr/bin/env python3
"""
Deterministic tool to grep the site for financial/watchlist terms:
yield, APY, returns, floor, profit, passive income, audited, guaranteed.
Permitted: "Guaranteed mint" within Mint phases / spot definitions only.
"""

import os
import re
import sys
import argparse

WATCHLIST_TERMS = [
    (r"\byield\b", "yield"),
    (r"\bapy\b", "APY"),
    (r"\breturns\b", "returns"),
    (r"\bfloor\b", "floor"),
    (r"\bprofit\b", "profit"),
    (r"\bpassive\s+income\b", "passive income"),
    (r"\baudited\b", "audited"),
    (r"\bguaranteed\b", "guaranteed"),
]

def scan_file(filepath):
    hits = []
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        for line_num, line in enumerate(f, 1):
            for pattern, label in WATCHLIST_TERMS:
                match = re.search(pattern, line, re.IGNORECASE)
                if match:
                    # Check allowed exception: "Guaranteed mint"
                    is_allowed_guaranteed = False
                    if label == "guaranteed":
                        if re.search(r"guaranteed\s+mint", line, re.IGNORECASE):
                            is_allowed_guaranteed = True

                    hits.append({
                        "file": filepath,
                        "line": line_num,
                        "term": label,
                        "snippet": line.strip(),
                        "is_allowed": is_allowed_guaranteed
                    })
    return hits

def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')

    parser = argparse.ArgumentParser(description="Grep site for watchlist terms.")
    parser.add_argument("--target", default="src", help="Target directory (default: src)")
    args = parser.parse_args()

    print(f"Scanning '{args.target}' for watchlist terms: yield, APY, returns, floor, profit, passive income, audited, guaranteed...")
    
    total_hits = []
    for root, _, files in os.walk(args.target):
        for file in files:
            if file.endswith((".ts", ".tsx", ".js", ".jsx", ".html", ".md", ".css")):
                full_path = os.path.join(root, file)
                file_hits = scan_file(full_path)
                total_hits.extend(file_hits)

    flagged_hits = [h for h in total_hits if not h["is_allowed"]]
    allowed_hits = [h for h in total_hits if h["is_allowed"]]

    print("\n--- GREP WATCHLIST REPORT ---")
    if flagged_hits:
        print(f"Found {len(flagged_hits)} watchlist occurrences:")
        for h in flagged_hits:
            clean_snippet = h['snippet'].encode('ascii', errors='replace').decode('ascii')
            print(f"  [{h['term'].upper()}] {h['file']}:{h['line']}")
            print(f"    --> {clean_snippet[:100]}")
    else:
        print("Zero unexpected watchlist terms found outside permitted contexts.")

    if allowed_hits:
        print(f"\nPermitted occurrences ({len(allowed_hits)} 'guaranteed mint' instances):")
        for h in allowed_hits:
            clean_snippet = h['snippet'].encode('ascii', errors='replace').decode('ascii')
            print(f"  [ALLOWED GUARANTEED] {h['file']}:{h['line']} -> {clean_snippet[:90]}")

    print("-----------------------------\n")

if __name__ == "__main__":
    main()
