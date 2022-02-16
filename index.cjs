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
  plugins: ["@typescript-eslint"],
  // Manually authored .d.ts files are generally used to describe external APIs that are  not expected
  // to follow our coding conventions.  Linting those files tends to produce a lot of spurious suppressions,
  // so we simply ignore them.
  ignorePatterns: ["*.d.ts"],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        // The "project" path is resolved relative to parserOptions.tsconfigRootDir.
        // Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },

      extends: [
        // Order matters!!!
        "airbnb",
        // Disable rules which are already handled by TypeScript
        "plugin:@typescript-eslint/eslint-recommended",
        // Apply TypeScript-specific rules
        "plugin:@typescript-eslint/recommended",
        // Apply TS extension rules
        "./extra/extension-ts.cjs",
        // Apply better defaults for some rules
        "./extra/base.cjs",
        // My overrides for convenience
        "./extra/opinion.cjs",
        // Disable prettier conflicting rules
        "plugin:prettier/recommended",
      ],
    },
  ],
};
