module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    "indent": ["error", 2],
    "brace-style": ["error", "allman", {
      "allowSingleLine": true
    }],
    "semi": 1,
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": false
    }]
  },
  overrides: [{
    "files": ["src/**/*.vue"]
  }]
};