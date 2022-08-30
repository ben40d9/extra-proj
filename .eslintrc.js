module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": [
        "**/*.spec.js",
      ],
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": ["jest"]
}
