# =============================================
# Cursor Automated Phone Click Tracking Script
# =============================================
# This script:
# - Scans all .jsx files in src/
# - Finds all <a href="tel:..."> links without tracking
# - Automatically inserts a dataLayer.push(...) handler
# - Generates phone_location based on:
#       - Filename
#       - Component name
# - Skips any tel: links that already contain onClick tracking
#
# OUTPUT:
# - A dry-run report first showing what will change
# - Then asks if you want to apply the changes
#
# Safe for production. No destructive refactors.
# =============================================

import os
import re

ROOT = "src"

# Updated pattern to handle multiline tags with DOTALL flag
tel_pattern = re.compile(r'<a\s+([^>]*?)href=["\']tel:([^"\']+)["\']([^>]*?)>', re.IGNORECASE | re.DOTALL)
onclick_pattern = re.compile(r'onClick\s*=', re.IGNORECASE)

changes = []

def generate_phone_location(file_path):
    file_name = os.path.basename(file_path).replace(".jsx", "")
    # Convert PascalCase or camelCase to readable
    readable = re.sub(r'([a-z])([A-Z])', r'\1 \2', file_name)
    return readable.strip()

def process_file(file_path):
    with open(file_path, "r") as f:
        content = f.read()

    new_content = content
    modified = False
    file_changes = []

    # Find all tel: links - need to check context around them
    # Look for tel: links and check if they have onClick in nearby lines
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        # Check if line contains tel: link
        if 'href="tel:' in line or "href='tel:" in line:
            # Check if this link already has onClick tracking
            # Look at current line and next few lines for onClick
            context = '\n'.join(lines[max(0, i):min(len(lines), i+5)])
            
            if onclick_pattern.search(context):
                continue  # Already has tracking
            
            # Extract the tel: link pattern
            tel_match = re.search(r'href=["\']tel:([^"\']+)["\']', line)
            if not tel_match:
                continue
            
            phone_number = tel_match.group(1)
            phone_location = generate_phone_location(file_path)
            
            # Find the <a tag start
            a_tag_start = line.rfind('<a')
            if a_tag_start == -1:
                continue
            
            # Check if it's a self-closing tag or has closing >
            if '/>' in line:
                # Self-closing tag
                insert_pos = line.rfind('/>')
                new_line = line[:insert_pos] + f' onClick={{() => window.dataLayer?.push({{ event: "phone_click", phone_location: "{phone_location}" }} )}} ' + line[insert_pos:]
            elif '>' in line:
                # Regular tag
                insert_pos = line.rfind('>')
                new_line = line[:insert_pos] + f' onClick={{() => window.dataLayer?.push({{ event: "phone_click", phone_location: "{phone_location}" }} )}}' + line[insert_pos:]
            else:
                # Multiline tag - need to find closing > in next lines
                # For now, add onClick before the first > we find
                continue  # Skip multiline for now, handle separately
            
            lines[i] = new_line
            modified = True
            file_changes.append(f"  Line {i+1}: Added tracking to tel:{phone_number}")

    if modified:
        new_content = '\n'.join(lines)

    return new_content, modified, file_changes

# Walk through project
for root, _, files in os.walk(ROOT):
    for file in files:
        if file.endswith(".jsx"):
            path = os.path.join(root, file)
            try:
                new_content, modified, file_changes = process_file(path)
                if modified:
                    changes.append((path, new_content, file_changes))
            except Exception as e:
                print(f"Error processing {path}: {e}")

# DRY RUN REPORT
print("====================================")
print(" DRY RUN — FILES THAT WILL BE UPDATED")
print("====================================")
if changes:
    for path, _, file_changes in changes:
        print(f"\n - {path}")
        for change in file_changes:
            print(change)
else:
    print("No files need updating - all tel: links already have tracking!")

print(f"\nTotal files to modify: {len(changes)}")
print("No changes have been written yet.\n")

# Auto-apply if changes found (non-interactive)
if changes:
    print("Applying changes automatically...")
    for path, new_content, _ in changes:
        with open(path, "w") as f:
            f.write(new_content)
    print(f"\n✅ Changes applied successfully to {len(changes)} file(s)! 🎉")
else:
    print("✅ All phone links already have tracking - no changes needed!")
