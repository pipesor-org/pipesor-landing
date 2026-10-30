#!/bin/sh
set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$root"
message=$(mktemp)
trap 'rm -f "$message"' EXIT HUP INT TERM

for subject in 'docs: explain setup' 'feat(ui): add navigation' 'fix: handle input' 'build(deps): update tooling'; do
  printf '%s\n\n%s\n' "$subject" 'Optional body' > "$message"
  "$root/.githooks/commit-msg" "$message"
done

printf 'feat(api): replace endpoint\n\nBREAKING CHANGE: use the new endpoint\n' > "$message"
"$root/.githooks/commit-msg" "$message"

for subject in 'update docs' 'chore: update tooling' 'Fix: handle input' 'fix: ' 'fix: Fix input.' 'Merge branch main' 'docs: this commit header deliberately exceeds the angular seventy two character limit'; do
  printf '%s\n' "$subject" > "$message"
  if "$root/.githooks/commit-msg" "$message" >/dev/null 2>&1; then
    printf 'Unexpectedly accepted: %s\n' "$subject" >&2
    exit 1
  fi
done

printf '%s\n' 'Commit-message checks passed.'
