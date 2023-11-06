const basePlugins = require('./base/plugins/base.plugins.js')
const baseExtends = require('./base/extends/base.extends.js')
const importExtends = require('./base/extends/import.extends.js')
const prettierExtends = require('./base/extends/prettier.extends.js')
const baseRules = require('./base/rules/base.rules.js');
const importRules = require('./base/rules/import.rules.js'); 
const tsOverride= require('./base/overrides/ts.override.js');
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true
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
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
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
  overrides : [ 
    tsOverride
  ], 
};