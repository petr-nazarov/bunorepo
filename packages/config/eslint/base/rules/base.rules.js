const noUnusedVarsCommon = require('../common/no-unused-vars')
const fileNameRules = [2, /^([.a-z0-9]+-)*[.a-z0-9_]+(?:\..*)?$/];
const folderNameRules =  [2, '^([a-z0-9]+-)*[a-z0-9_]+?$|__mocks__']
module.exports = {
  'prefer-template': 'error',
  //'arrow-body-style': ['error', 'always'],
  'no-var': 'error',
  'max-len': 'off',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  
  'no-unused-vars': noUnusedVarsCommon['no-unused-vars'],
  'filename-rules/match': fileNameRules ,
  'folders-rules/match-regex': folderNameRules,


  'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' }]
};