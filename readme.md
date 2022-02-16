# `eslint-config-tsap`

ESLint config `typescript` + `airbnb` + `prettier`

## Install

```sh
npm install --save-dev eslint-config-tsap
```

## Usage

Create an **.eslintrc.js** config file that provides the NodeJS `__dirname` context
for TypeScript. Add your profile string in the `extends` field, as shown below:

### **.eslintrc.cjs**

```ts
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('eslint-config-tsap/patch/modern-module-resolution');

module.exports = {
  extends: ["tsap"],
  parserOptions: { tsconfigRootDir: __dirname }
};
```
