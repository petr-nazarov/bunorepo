const basePlugins = require('./base/plugins/base.plugins.js')
const baseExtends = require('./base/extends/base.extends.js')
const importExtends = require('./base/extends/import.extends.js')
const prettierExtends = require('./base/extends/prettier.extends.js')
const baseRules = require('./base/rules/base.rules.js');
const importRules = require('./base/rules/import.rules.js'); 
const defaultTsOverride= require('./base/overrides/ts.override.js');
const tsOverride = {
  ...defaultTsOverride,
  extends: [
    ...defaultTsOverride.extends,
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates"
  ],
  rules: {
    ...defaultTsOverride.rules,
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "app",
        "style": "camelCase"
      }
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": "app",
        "style": "kebab-case"
      }
    ],
  }, 
  "settings": {
    'import/resolver': {
      'node': {
          'paths': ['src'],
          'extensions': ['.js', '.ts', '.d.ts', '.tsx']
      },
  },
  }
}
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  ignorePatterns: [
    "projects/**/*",
    "/**/db/mongo/**/"
  ],
  plugins: basePlugins,
  extends: [
    ...baseExtends,
    ...importExtends,
    // !!! Prettier must be last to override other configs !!!!
    ...prettierExtends
  ],
  rules: {
    ...baseRules,
    ...importRules,
  },
  overrides: [
    tsOverride,
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {}
    }
  ]
}
