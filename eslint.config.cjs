const {
    defineConfig,
} = require("eslint/config");

const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const parser = require("vue-eslint-parser");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {},
        parser: parser,
        sourceType: "module",
        ecmaVersion: 2020,

        parserOptions: {
            parser: "@typescript-eslint/parser",
            project: true,
            tsconfigRootDir: "src",
            extraFileExtensions: [".vue"],
        },
    },

    extends: compat.extends(
        "@vue/typescript/recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "vue/require-default-prop": "off",

        "@typescript-eslint/no-restricted-types": ["error", {
            "types": {
                "{}": {
                    "message": "Use object instead",
                },

                "Function": {
                    "message": "Use a specific function type instead, like `() => void`",
                },

                "Object": {
                    "message": "Use {} instead",
                },

                "Number": {
                    "message": "Use number instead",
                },
            },
        }],
    },
}, {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],

    languageOptions: {
        globals: {
            ...globals.mocha,
        },
    },
}]);
