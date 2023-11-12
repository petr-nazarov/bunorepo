# Bunorepo - a bun monorepo template

# Motivation 
As a huge fan of monorepos and Bun, I wanted a simple monorepo template to start any new project. 
Current features:
- Automated linting, formatting, conventional commits checks. All integrated into GitHub actions 
- Automated changelog creation
- Automated PR checks: test, style, changelog etc.
- Set up for release of each package separately 
- Easy package generation

If you have features to suggest feel free to open an Issue or, better a PR :-) 


# Usage 
## Requirements 
 - bun
 - (Optional) Add changesets bot for your PRs https://github.com/apps/changeset-bot

To use this template run: 
`bun create github.com/petr-nazarov/bunorepo` or clone it as a new repo

To install dependencies:
```bash
bun install
bun setup # setups husky for pre-commit checks
```

# Need to know: 
## Pull request 
An opened pull request starts a `pr.yml` check. It expects you to have a `changesets` that describes the changesets to affectes packages. You can create a changeset easaly by running `bun run doc:changes` and follow the questions in the cli.
The github action will determine the changed packages, and run tests only for them.

## Release
You can run `bun release` to release the changed packages. It will automatically bump the version of affected packages (based on changesetes) and run a `release.yml` github action for them.

## Labels: 
The logic of labels tries to follow this lable documentation https://github.com/ManageIQ/guides/blob/master/labels.md (Kudos!)

# Components 
 - `check-dependency-version-consistency` Check that all the repos require the same versions of packages.
 - `commitlint` - Ensure the rules for commit massage. Rules are stored in `commitlint.config.js` 
 - `biome` - Linting, Formatting, Import order 
 - `commitizen` - Beautiful  commit promt.
 - `husky` - Run checks before committing
 - `changesets` - Automate versioning and changelogs
 - `turborepo` - dependencies graph resolution and task running
# Scripts
 - `bun run check`
   - check version consistency 
   - check formatting, lining and import order
 - `bun run fix`:
    - fix linting, formatting and import order
 - `bun run cm` - run a commit promt
 - `bun run clean`
    - remove all `node_modules` and all `dist`s
 - `bun run generate:package <name>` - generates a new package in the repository
 - `bun run doc:changes` - create changesets for affected packages 
 - `bun run release`- Bump package versions based on changestes and run a release github action for them.
