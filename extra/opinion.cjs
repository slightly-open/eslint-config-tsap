module.exports = {
  rules: {
    // Require explicit return types on functions and class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    // * Rule is disable because of heavily used callbacks for 3rd party libs
    // * where return type is 3-level 15-parameters generic type from the lib.
    // * It is tons of efforts to figure out the type,
    // * but inferred return type works too.
    "@typescript-eslint/explicit-function-return-type": "off",

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    // * Enforce to use named export
    // ! NOTE: there are case when default export is required (for example, in storybook).
    // ! In such cases create override to change rules only for those places
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    // * Rule is disable because underscores are ok
    // * From docs: Whether or not you choose to allow dangling underscores in identifiers
    // * is purely a convention and has no effect on performance, readability, or complexity.
    // * It's purely a preference
    "no-underscore-dangle": "off",

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    // * I don't see why it makes my code better
    "react/destructuring-assignment": "off",

    // Enforce shorthand or standard form for React fragments.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    // * The element mode is more clear (as more explicit)
    "react/jsx-fragments": ["error", "element"],

    // Enforce that a label tag has a text label and an associated control
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
    // airbnb set `assert:both` but I think `either` makes more sense
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25,
      },
    ],
  },
};
