import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser
        }
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            import: pluginImport,
            "react-hooks": pluginReactHooks
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/self-closing-comp": [
                "error",
                {
                    component: true,
                    html: true
                }
            ],
            "react-hooks/exhaustive-deps": "off",
            "react-hooks/rules-of-hooks": "error",
            "arrow-body-style": ["error", "as-needed"],
            "no-empty-pattern": "error",
            "no-self-compare": "error",
            "no-unused-vars": "off",
            "use-isnan": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports"
                }
            ],
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type"
                    ],
                    pathGroups: [
                        {
                            pattern: "react",
                            group: "builtin",
                            position: "before"
                        },
                        {
                            pattern: "react-*",
                            group: "builtin",
                            position: "before"
                        },
                        {
                            pattern: "react-*/**",
                            group: "builtin",
                            position: "before"
                        },
                        { pattern: "~*", group: "external", position: "after" },
                        {
                            pattern: "~*/**",
                            group: "parent",
                            position: "before"
                        }
                    ],
                    pathGroupsExcludedImportTypes: ["react"]
                }
            ],
            "import/first": "error",
            "import/no-duplicates": "warn"
        }
    }
]);
