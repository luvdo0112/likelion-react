module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        'no-unused-vars': 'warn',
        'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/anchor-has-content': [
            'warn',
            {
              components: ['Link'],
            },
          ],
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
              components: ['Link'],
            },
          ],
    },
  }