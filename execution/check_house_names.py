#!/usr/bin/env python3
"""
Deterministic tool to audit House names in src/ against the canon from FANTASY-MEOWS-WEBSITE-REFERENCE.md.
Canon House names (6):
  1. Circle of Whisk
  2. Pawguard
  3. Rootpads
  4. Emberkin
  5. Rimewhisper
  6. Voidpurr

Disallowed as House names:
  "Embers", "Whispers", "Waves", "Spores", "Frost", "Starlight" (e.g. "House of Embers", "House Waves", etc.)
"""

import os
import re
import sys
import argparse

CANON_HOUSES = [
    "Circle of Whisk",
    "Pawguard",
    "Rootpads",
    "Emberkin",
    "Rimewhisper",
    "Voidpurr",
]

# Patterns where archetype words are wrongly used as House names
NON_CANON_HOUSE_PATTERNS = [
    (r"\bHouse\s+of\s+(Embers|Whispers|Waves|Spores|Frost|Starlight)\b", "House of <Archetype>"),
    (r"\bHouse\s+(Embers|Whispers|Waves|Spores|Frost|Starlight)\b", "House <Archetype>"),
]

def scan_file(filepath):
    non_canon_hits = []
    canon_hits = {h: 0 for h in CANON_HOUSES}

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        for line_num, line in enumerate(f, 1):
            # Check for non-canon house names
            for pattern, label in NON_CANON_HOUSE_PATTERNS:
                m = re.search(pattern, line, re.IGNORECASE)
                if m:
                    non_canon_hits.append({
                        "file": filepath,
                        "line": line_num,
                        "label": label,
                        "match": m.group(0),
                        "snippet": line.strip()
                    })

            # Check canon house names
            for h in CANON_HOUSES:
                if re.search(r"\b" + re.escape(h) + r"\b", line, re.IGNORECASE):
                    canon_hits[h] += 1

    return non_canon_hits, canon_hits

def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')

    parser = argparse.ArgumentParser(description="Check for canonical House names.")
    parser.add_argument("--target", default="src", help="Target directory (default: 'src')")
    args = parser.parse_args()

    print(f"Scanning '{args.target}' for canonical House names and non-canon archetype names...")

    all_non_canon = []
    total_canon_counts = {h: 0 for h in CANON_HOUSES}

    for root, _, files in os.walk(args.target):
        for file in files:
            if file.endswith((".ts", ".tsx", ".js", ".jsx", ".html", ".css", ".md")):
                full_path = os.path.join(root, file)
                nc, ch = scan_file(full_path)
                all_non_canon.extend(nc)
                for h, count in ch.items():
                    total_canon_counts[h] += count

    print("\n--- HOUSE NAMES AUDIT REPORT ---")
    print("Canon House Usage Counts in src/:")
    for h in CANON_HOUSES:
        print(f"  - {h}: {total_canon_counts[h]} occurrences")

    if all_non_canon:
        print(f"\nFAILED: Found {len(all_non_canon)} non-canon House name occurrences:")
        for hit in all_non_canon:
            clean_snippet = hit['snippet'].encode('ascii', errors='replace').decode('ascii')
            print(f"  [{hit['label']}] {hit['file']}:{hit['line']} -> {hit['match']}")
            print(f"    --> {clean_snippet[:100]}")
        sys.exit(1)
    else:
        print("\nPASSED: Zero non-canon House names ('Embers/Whispers/Waves/Spores/Frost/Starlight') found in src/.")
        print("Only canonical House names are used across the codebase.")
        print("--------------------------------\n")
        sys.exit(0)

if __name__ == "__main__":
    main()
