const noUnusedVarsCommon = require('../common/no-unused-vars')
module.exports = {
  // Match TypeScript Files
  // =================================
    files: ['**/*.{ts,tsx,js}'],
    parserOptions: {
      tsconfigRootDir: __dirname,
      sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:prettier/recommended'],
    env: {
      node: true,
      jest: true
    },
    rules: {
      '@typescript-eslint/no-unused-vars': noUnusedVarsCommon['no-unused-vars'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  
}