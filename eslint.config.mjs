import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  prettier,

  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],

    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      "react/no-unstable-nested-components": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "react/no-array-index-key": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/set-state-in-effect": "off",

      "prettier/prettier": "error",

      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],

      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],

      "no-param-reassign": "off",
      "no-shadow": "off",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "consistent-return": "off",

      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "*.{css,scss,sass,less}",
              patternOptions: { matchBase: true },
              group: "index",
              position: "after",
            },
            {
              pattern: "styles",
              patternOptions: { matchBase: true },
              group: "index",
              position: "after",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
        {
          blankLine: "always",
          prev: "*",
          next: ["if", "for", "while", "switch", "function"],
        },
        {
          blankLine: "always",
          prev: ["if", "for", "while", "switch", "function"],
          next: "*",
        },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
      ],
    },

    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts", ".tsx"],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          project: "./tsconfig.json",
        },
      },
      react: {
        version: "detect",
      },
    },
  },
]);
