import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest"; //NOTE - required by jest syntax for flat config
import globals from "globals"; //NOTE - required by jest syntax for flat config

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: [
      "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}",
      "tests/**/*.{js,jsx,ts,tsx,json,css,scss,md}",
    ],
    languageOptions: {
      //NOTE - required by jest syntax for flat config
      globals: {
        ...globals.jest,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {jest}, //NOTE - required by jest syntax for flat config
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": [
        "error",
        {vars: "all", args: "after-used", ignoreRestSiblings: false},
      ],
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  }
);
