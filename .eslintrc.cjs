module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    'plugin:cypress/recommended'
  ],
  plugins: ["@typescript-eslint", "cypress"],
  overrides: [],
  rules: {
    "no-promise-executor-return": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": "off",
    "no-await-in-loop": "off",
    "func-names": "off",
    "prefer-arrow-callback": "off",
    "no-useless-return": "off"
  }
};
