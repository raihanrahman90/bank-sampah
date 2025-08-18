import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: new URL(".", import.meta.url).pathname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
  ),
  {
    rules: {
      // Prettier rules
      "prettier/prettier": [
        "error",
        {
          printWidth: 120, // maximum line length
        },
      ],
    },
  },
];

export default eslintConfig;
