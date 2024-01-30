module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect" // This overrides '18.2' to always use the detected React version
    }
  },
  plugins: ["react", "react-refresh", "prettier", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "indent": ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": 1,
    "stylelint/declaration-block-no-ignored-properties": true,
    "stylelint/declaration-block-no-duplicate-properties": true,
    "stylelint/no-unknown-animations": true
  }
};
