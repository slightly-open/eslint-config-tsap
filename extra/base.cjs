/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ["eslint-comments"],
  rules: {
    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // * It is here to allow .tsx extension
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // * It is here to forbid .ts and .tsx extensions
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // * It is here because we need strict ordering for imports with aliases
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react/**",
            group: "external",
            position: "before",
            patternOptions: { partial: true },
          },
          {
            pattern: "react-*/**",
            group: "external",
            position: "before",
            patternOptions: { partial: true },
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "object"],
      },
    ],

    // Disallow Reassignment of Function Parameters
    // https://eslint.org/docs/rules/no-param-reassign
    // * It is here to override a list of ignorePropertyModificationsFor
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [
          "draft", // for immer produce draft
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
        ],
      },
    ],

    // require include descriptions in ESLint directive-comments
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
    // * You should have a reason to disable rule
    "eslint-comments/require-description": "error",
  },
};
