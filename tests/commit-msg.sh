#!/bin/sh
set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$root"
message=$(mktemp)
trap 'rm -f "$message"' EXIT HUP INT TERM

for subject in 'docs: explain setup' 'feat(ui): add navigation' 'fix: handle input' 'build(deps): update tooling' 'chore: update tooling' 'feat(api)!: replace endpoint'; do
  printf '%s\n\n%s\n' "$subject" 'Optional body' > "$message"
  lefthook run commit-msg "$message" --no-auto-install
done

printf 'feat(api): replace endpoint\n\nBREAKING CHANGE: use the new endpoint\n' > "$message"
lefthook run commit-msg "$message" --no-auto-install

for subject in 'update docs' 'Fix: handle input' 'fix: ' 'fix: Fix input.' 'Merge branch main' 'docs: this commit header deliberately exceeds the angular seventy two character limit'; do
  printf '%s\n' "$subject" > "$message"
  if lefthook run commit-msg "$message" --no-auto-install >/dev/null 2>&1; then
    printf 'Unexpectedly accepted: %s\n' "$subject" >&2
    exit 1
  fi
done

printf '%s\n' 'Commit-message checks passed.'
