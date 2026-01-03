#!/usr/bin/env bash
set -euo pipefail
find .. -name 'node_modules' -prune -o -type f -print | grep '\.tsx$'
