module.exports = { 
  'import/no-unresolved': [
    2,
    {
      commonjs: true,
      amd: true ,
      caseSensitive: true
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.spec.ts', '**/*.spec.js', './terraform/**/*.js', './pulumi/**/*.js', './iac/**/*.{js,ts}'],
      optionalDependencies: false,
      peerDependencies: false
    }
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
      warnOnUnassignedImports: true,
      'newlines-between': 'never',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false
      }
    }
  ],
  'import/namespace': 0,
}