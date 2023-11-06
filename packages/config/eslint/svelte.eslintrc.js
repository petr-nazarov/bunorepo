const basePlugins = require('./base/plugins/base.plugins.js')
const baseExtends = require('./base/extends/base.extends.js')
const importExtends = require('./base/extends/import.extends.js')
const prettierExtends = require('./base/extends/prettier.extends.js')
const baseRules = require('./base/rules/base.rules.js');
const importRules = require('./base/rules/import.rules.js'); 
const tsOverride= require('./base/overrides/ts.override.js');
const localImportRules = {...importRules};

localImportRules['import/no-unresolved'][1].ignore = ['app/env',  'app/navigation', 'app/stores']

module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  globals: {
    assert: true,
    browser: true,
    expect: true,
    by: true,
    protractor: true,
    sinon: true,
    xdescribe: true,
    xit: true
  },
  parser: '@typescript-eslint/parser',
	parserOptions: {
    project: "tsconfig.json",
    extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  plugins: [
    ...basePlugins,
    'svelte3',
    '@typescript-eslint'
  ],
  extends: [
    ...baseExtends,
    ...importExtends,
    'plugin:@typescript-eslint/recommended',
    // !!! Prettier must be last to override other configs !!!!
    ...prettierExtends
  ],
  ignorePatterns: ['*.cjs'],
  settings: {
		'svelte3/typescript': () => require('typescript'),
    'import/resolver': {
      'typescript': {}
    }
	},
  rules: {
    ...baseRules,
    ...localImportRules,
    'filename-rules/match':   [2, /^([.A-z0-9]+-)*[.A-z0-9_@]+(?:\..*)?$/],
    'folders-rules/match-regex': [2, '^([A-z0-9]+-)*[A-z0-9_]+?$|__mocks__'],
  },
  overrides : [ 
    tsOverride,
    {
      files: ['*.svelte'],
      parser: "svelte-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
		    parser: "@typescript-eslint/parser",
        tsconfigRootDir: __dirname,
        sourceType: 'module'
	    }
    },
  ], 
};

