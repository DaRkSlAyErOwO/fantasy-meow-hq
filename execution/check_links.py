#!/usr/bin/env python3
"""
Deterministic tool to audit all internal links across the static export in out/.
Verifies:
1. Every internal href points to a valid file in out/.
2. Every hash anchor (#id) exists on the target page.
Reports: total links checked, unique internal links, and broken links (if any).
"""

import os
import re
import sys
import argparse
from urllib.parse import urlparse, unquote

def extract_links_and_ids(html_content):
    # Find all anchor tags with href
    href_matches = re.findall(r'<a\s+[^>]*href=["\']([^"\']+)["\']', html_content, re.IGNORECASE)
    
    # Find all IDs on the page
    id_matches = set(re.findall(r'\bid=["\']([^"\']+)["\']', html_content, re.IGNORECASE))
    name_matches = set(re.findall(r'\bname=["\']([^"\']+)["\']', html_content, re.IGNORECASE))
    all_targets = id_matches | name_matches
    
    return href_matches, all_targets

def resolve_target_file(out_dir, path):
    clean_path = path.strip()
    if clean_path.startswith('/'):
        clean_path = clean_path[1:]
    
    # Empty path -> index.html
    if not clean_path:
        target = os.path.join(out_dir, "index.html")
        return target if os.path.exists(target) else None
    
    # Direct file match
    direct = os.path.join(out_dir, clean_path)
    if os.path.isfile(direct):
        return direct
    
    # Clean path ending in / -> index.html
    if os.path.isdir(direct):
        idx = os.path.join(direct, "index.html")
        if os.path.isfile(idx):
            return idx
            
    # Try .html extension
    html_ext = os.path.join(out_dir, clean_path + ".html")
    if os.path.isfile(html_ext):
        return html_ext
        
    # Try directory with index.html
    dir_idx = os.path.join(out_dir, clean_path, "index.html")
    if os.path.isfile(dir_idx):
        return dir_idx

    return None

def check_static_export(out_dir="out"):
    if not os.path.isdir(out_dir):
        print(f"Error: Static export directory '{out_dir}' does not exist. Run 'npm run build' first.")
        return 1

    print(f"Auditing internal links across static export in '{out_dir}'...")

    html_files = {}
    page_ids = {}

    for root, _, files in os.walk(out_dir):
        for file in files:
            if file.endswith(".html"):
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, out_dir).replace("\\", "/")
                with open(full_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                hrefs, ids = extract_links_and_ids(content)
                html_files[rel_path] = hrefs
                page_ids[rel_path] = ids

    total_links = 0
    checked_internal_links = 0
    broken_links = []

    for source_file, hrefs in html_files.items():
        for href in hrefs:
            total_links += 1
            # Skip external, mailto, tel, javascript, etc.
            if href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:")):
                continue

            checked_internal_links += 1
            parsed = urlparse(href)
            path = unquote(parsed.path)
            fragment = parsed.fragment

            # Determine target file
            if not path:
                # Same-page anchor (#something)
                target_file_rel = source_file
            else:
                resolved = resolve_target_file(out_dir, path)
                if not resolved:
                    broken_links.append({
                        "source": source_file,
                        "href": href,
                        "reason": f"Target path '{path}' does not resolve to an HTML file in {out_dir}"
                    })
                    continue
                target_file_rel = os.path.relpath(resolved, out_dir).replace("\\", "/")

            # Check fragment/anchor if present
            if fragment:
                valid_ids = page_ids.get(target_file_rel, set())
                if fragment not in valid_ids:
                    broken_links.append({
                        "source": source_file,
                        "href": href,
                        "reason": f"Anchor '#{fragment}' not found in target '{target_file_rel}'"
                    })

    print(f"\n--- STATIC EXPORT LINK CHECK REPORT ---")
    print(f"HTML pages scanned:     {len(html_files)}")
    print(f"Total links found:      {total_links}")
    print(f"Internal links checked: {checked_internal_links}")
    print(f"Broken internal links:  {len(broken_links)}")

    if broken_links:
        print("\nBroken links found:")
        for b in broken_links:
            print(f"  [BROKEN] {b['source']} -> {b['href']} ({b['reason']})")
        print("---------------------------------------\n")
        return 1
    else:
        print("\nPASSED: 0 broken internal links found across the entire static export.")
        print("---------------------------------------\n")
        return 0

def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')

    parser = argparse.ArgumentParser(description="Check for broken internal links in static export.")
    parser.add_argument("--dir", default="out", help="Static export directory (default: 'out')")
    args = parser.parse_args()

    sys.exit(check_static_export(args.dir))

if __name__ == "__main__":
    main()
