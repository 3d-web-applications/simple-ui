module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "max-len": [1, 80, 4, {"ignoreComments": true}],
    "no-underscore-dangle": 0,
    "func-names": ["error", "never"],
    "no-bitwise": 0,
    "import/prefer-default-export": "off"
  },
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "globals": {
    "React": true,
    "localStorage": true,
    "document": true,
    "window": true,
  }
}