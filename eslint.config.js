
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// tseslint and typescript-eslint related imports are removed

export default [
  { ignores: ["dist"] },
  {
    // Global settings for all JS/JSX files
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
  // Configuration for JS/JSX files
  {
    files: ["**/*.{js,jsx}"],
    // Using js.configs.recommended for base JS rules
    // For JSX support, ensure your environment (e.g., Vite) handles JSX transformation
    // and ESLint is configured to parse it if not automatically handled.
    // ESLint itself doesn't transform JSX but can parse it with correct settings.
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Spread rules from reactHooks.configs.recommended if it's an object
      // Ensure reactHooks.configs.recommended.rules is the correct path to rules
      ...(reactHooks.configs.recommended.rules || {}), 
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // JS equivalent for unused vars
      "react/prop-types": "off", // Common to turn off if not using PropTypes
      "react/react-in-jsx-scope": "off", // Not needed with modern React JSX transform
    },
  },
];
