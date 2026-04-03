#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  ./push-to-design-system-repo.sh [--dry-run] [commit message]

Examples:
  ./push-to-design-system-repo.sh --dry-run
  ./push-to-design-system-repo.sh "Sync local design-system updates"

What it does:
  1. Clones https://github.com/suryansh-raven-dev/design-system into a temp dir
  2. Syncs this local folder into apps/raven/design-system/raven-ui/
  3. Shows the diff
  4. Commits and pushes to main unless --dry-run is used

Notes:
  - Does not change your current repo remotes or git config
  - Excludes local-only build folders like node_modules, dist, and storybook-static
EOF
}

DRY_RUN=0
if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  usage
  exit 0
fi

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=1
  shift
fi

COMMIT_MESSAGE="${*:-Sync local design-system workspace}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_REPO_URL="https://github.com/suryansh-raven-dev/design-system"
TARGET_SUBPATH="apps/raven/design-system/raven-ui"
TEMP_DIR="$(mktemp -d /tmp/design-system-sync.XXXXXX)"

cleanup() {
  rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

echo "Cloning target repo into $TEMP_DIR"
git clone "$TARGET_REPO_URL" "$TEMP_DIR"

echo "Syncing local design-system into $TARGET_SUBPATH"
rsync -a --delete \
  --exclude "node_modules" \
  --exclude "dist" \
  --exclude "storybook-static" \
  --exclude ".DS_Store" \
  --exclude "tsconfig.tsbuildinfo" \
  --exclude "*.log" \
  --exclude ".claude" \
  --exclude ".gitignore" \
  --exclude "push-to-design-system-repo.sh" \
  --exclude "pull-from-design-system-repo.sh" \
  "$SCRIPT_DIR/" \
  "$TEMP_DIR/$TARGET_SUBPATH/"

cd "$TEMP_DIR"

echo
echo "Status after sync:"
git status --short --branch

echo
echo "Diff summary:"
git diff --stat

TARGET_STATUS="$(git status --porcelain --untracked-files=all -- "$TARGET_SUBPATH")"

if [[ -z "$TARGET_STATUS" ]]; then
  echo
  echo "No changes to push."
  exit 0
fi

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo
  echo "Dry run only. No commit or push performed."
  exit 0
fi

git add "$TARGET_SUBPATH"
git commit -m "$COMMIT_MESSAGE"
git push origin main

echo
echo "Push complete."
