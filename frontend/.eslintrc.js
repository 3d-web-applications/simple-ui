module.exports = {
  "parser": "babel-eslint",
  "rules": {
      "max-len": [1, 80, 4, {"ignoreComments": true}],
      "no-underscore-dangle": 0,
      "func-names": ["error", "never"],
      "no-bitwise": 0,
      "import/prefer-default-export": "off"
  },
  "extends": ["airbnb-base"]
}