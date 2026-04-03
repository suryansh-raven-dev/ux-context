#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  ./pull-from-design-system-repo.sh [--dry-run]

Examples:
  ./pull-from-design-system-repo.sh --dry-run
  ./pull-from-design-system-repo.sh

What it does:
  1. Clones https://github.com/suryansh-raven-dev/design-system into a temp dir
  2. Syncs apps/raven/design-system/raven-ui/ back into this local folder
  3. Uses rsync --delete to mirror the tracked remote app path

Notes:
  - Does not change your current repo remotes or git config
  - Excludes local-only folders like node_modules, dist, and storybook-static
  - Run --dry-run first if you want to inspect before applying
  - Because this mirrors the tracked remote path, local-only files may be deleted
EOF
}

DRY_RUN=0
if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  usage
  exit 0
fi

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_REPO_URL="https://github.com/suryansh-raven-dev/design-system"
TARGET_SUBPATH="apps/raven/design-system/raven-ui"
TEMP_DIR="$(mktemp -d /tmp/design-system-pull.XXXXXX)"

cleanup() {
  rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

echo "Cloning target repo into $TEMP_DIR"
git clone "$TARGET_REPO_URL" "$TEMP_DIR"

RSYNC_ARGS=(
  -a
  --delete
  --exclude "node_modules"
  --exclude "dist"
  --exclude "storybook-static"
  --exclude ".DS_Store"
  --exclude "tsconfig.tsbuildinfo"
  --exclude "*.log"
  --exclude ".claude"
  --exclude ".gitignore"
  --exclude "push-to-design-system-repo.sh"
  --exclude "pull-from-design-system-repo.sh"
)

if [[ "$DRY_RUN" -eq 1 ]]; then
  RSYNC_ARGS+=(--dry-run --itemize-changes)
fi

echo "Syncing $TARGET_SUBPATH into local design-system folder"
rsync "${RSYNC_ARGS[@]}" \
  "$TEMP_DIR/$TARGET_SUBPATH/" \
  "$SCRIPT_DIR/"

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo
  echo "Dry run only. No local files were changed."
else
  echo
  echo "Pull complete."
fi
