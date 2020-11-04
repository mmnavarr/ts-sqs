module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  plugins: [
    "import",
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/typescript"
  ],
  parserOptions: {
    "ecmaVersion": 6,
  },
  rules: {
    // General Rules
    "no-console": 0,
    "no-debugger": 0,
    "no-undef": 0, // Typescript compiler has the checks built in
    "spaced-comment": ["warn", "always"],
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "no-var": "warn",
    "no-extra-semi": "warn",
    "no-unused-vars": 0,
    "no-trailing-spaces": ["warn", { "skipBlankLines": true }],
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-irregular-whitespace": "warn",
    "jsx-quotes": ["warn", "prefer-double"],
    "no-mixed-spaces-and-tabs": "warn",
    "import/namespace": ["error", { allowComputed: true }],
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],

    // Typescript rules
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0
  }
}