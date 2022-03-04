module.exports = {
  // After an .eslintrc.js file is loaded, ESLint will normally continue visiting all parent folders
  // to look for other .eslintrc.js files, and also consult a personal file ~/.eslintrc.js.  If any files
  // are found, their options will be merged.  This is difficult for humans to understand, and it will cause
  // nondeterministic behavior if files are loaded from outside the Git working folder.
  //
  // Setting root=true causes ESLint to stop looking for other config files after the first .eslintrc.js
  // is loaded.
  root: true,

  // Disable the parser by default
  parser: "",

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        /**
         * The "project" path is resolved relative to parserOptions.tsconfigRootDir.
         * Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
         * See example in the [readme](./readme.md)
         */
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },

      extends: [
        // Order matters!!!
        "airbnb",

        // Apply TypeScript-specific rules
        // It configures plugin and parser and disables eslint rules
        // which are already handled by TypeScript
        "plugin:@typescript-eslint/recommended",

        // Apply TS extension rules
        // See more: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
        "./extra/extension-ts.cjs",

        // Apply better defaults for some rules
        "./extra/base.cjs",

        // My overrides for convenience
        "./extra/opinion.cjs",

        // Disable prettier conflicting rules
        "prettier",

        // Disable arrow-body-style and prefer-arrow-callback
        // See more: https://github.com/prettier/eslint-config-prettier/#arrow-body-style-and-prefer-arrow-callback
        "prettier/prettier",

        // Configure import plugin for TS
        "plugin:import/typescript",
      ],

      settings: {
        "import/resolver": {
          // enable `eslint-import-resolver-typescript`
          typescript: {},
        },
      },
    },
  ],
};
