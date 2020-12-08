module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  ignorePatterns: ["gh-pages-deploy.js"],
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
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "no-trailing-spaces": "error",
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