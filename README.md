# crypto-p2p-matcher

To install dependencies:

```bash
bun install
bun setup
```
# Components 
 - `check-dependency-version-consistency` Check that all the repos require the same versions of packages.
 - `commitlint` - Ensure the rules for commit msgs. Rules are stored in `commitlint.config.js` 
 - `biome` - Linting, Formatting, Import order 
 - `commitizen` - Beautifull commit promt.
 - `husky` - Run checks before commiting
 
# Global scripts
 - `bun check`
   - check version consistency 
   - check formatting, lining and import order
 - `bun fix`:
    - fix linting, formatting and import order
 - `bun cm` - run a commit promt
 - `bun clean`
    - remove all `node_modules` and all `dist`s
# Todo 
- [x] eslint
- [x] prettier 
- [ ] tsc 
- [ ] semver releases 
- [x] commitizen 
- [x] commitlint
- [x] lint-staged
- 
