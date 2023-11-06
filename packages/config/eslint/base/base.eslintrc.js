

const overrideTsRules = 

const importExtends = [
  
]
const baseExtends =  [
  ...importExtends,
];
const global = {
  // Global ESLint Settings
  // =================================
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
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
  // ===========================================
  // Set up ESLint for .js / .jsx files
  // ===========================================
  parserOptions: {
    //ecmaVersion: 2020
    ecmaVersion: 13,
    sourceType: 'module'
  },

  // Plugins
  // =================================
  plugins: ['filename-rules', 'folders-rules'],

  // Extend Other Configs
  // =================================
  extends: [
    ...baseExtends,
      
      
    ],
  rules: baseRules,
}

module.exports = {
  global,
  baseRules,
  baseExtends,
  overrideTsRules,
  fileNameRules,
  folderNameRules,
};