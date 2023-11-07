# Bun monorepo template

To install dependencies:

```bash
bun install
bun setup
```
# Requirements 
 - (Optional) Add changesets bot for your PRs https://github.com/apps/changeset-bot
# Components 
 - `check-dependency-version-consistency` Check that all the repos require the same versions of packages.
 - `commitlint` - Ensure the rules for commit msgs. Rules are stored in `commitlint.config.js` 
 - `biome` - Linting, Formatting, Import order 
 - `commitizen` - Beautifull commit promt.
 - `husky` - Run checks before commiting
 - `changesets` - Automate verioning and changelogs
# Global scripts
 - `bun check`
   - check version consistency 
   - check formatting, lining and import order
 - `bun fix`:
    - fix linting, formatting and import order
 - `bun cm` - run a commit promt
 - `bun clean`
    - remove all `node_modules` and all `dist`s
 - `bun generate:package <name>` - generates a new package in the repository
