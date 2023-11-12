#!/bin/bash
#This script is used to get the changed packages from the current branch
bun turbo run get:version --filter=...[origin/main] --dry-run=json | jq -r '.packages' | sed '/\/\//d' | tr -d '\n'

