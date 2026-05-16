import os

"""
One-off helper for v0.3 documentation audits.

This script reports likely legacy positioning terms so maintainers can review
them manually. It does not rewrite files because some terms are valid in
negative explanatory context, such as "Feeds are not protocols."
"""

review_terms = [
    "V" + "2.0",
    "v" + "2.0",
    "Mutation " + "Protocol",
    "Execution " + "Protocol Script",
    "behavioral upgrade scripts",
    "deterministic " + "protocol",
]

base_dir = os.path.dirname(os.path.abspath(__file__))
targets = [
    os.path.join(base_dir, "README.md"),
    os.path.join(base_dir, "README.en.md"),
    os.path.join(base_dir, "README.zh-TW.md"),
    os.path.join(base_dir, "CONTRIBUTING.md"),
    os.path.join(base_dir, "feeds"),
    os.path.join(base_dir, "docs"),
]

for target in targets:
    if os.path.isfile(target):
        files = [target]
    else:
        files = []
        for root, _, names in os.walk(target):
            for name in names:
                if name.endswith((".md", ".json", ".html", ".js")):
                    files.append(os.path.join(root, name))

    for filepath in files:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        for term in review_terms:
            if term in content:
                if term == "deterministic " + "protocol":
                    allowed = (
                        "not a deterministic protocol" in content
                        or "not deterministic protocols" in content
                    )
                    without_allowed = (
                        content
                        .replace("not a deterministic protocol", "")
                        .replace("not deterministic protocols", "")
                    )
                    if term not in without_allowed:
                        continue
                print(f"Review {filepath}: {term}")
