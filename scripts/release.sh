#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <version>" >&2
  exit 1
fi

VERSION="$1"

# Update version in code
printf 'export const version = "%s"\n' "$VERSION" > pack/version.ts

git add pack/version.ts
git commit -m "chore: release v$VERSION"
git tag -a "v$VERSION" -m "v$VERSION"
git push origin HEAD
git push origin "v$VERSION"

# Create GitHub release (requires gh auth setup in your env)
gh release create "v$VERSION" --generate-notes
