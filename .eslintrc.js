module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    // 'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "indent": ["error", "tab"],
    "quotes": ["error", "double"],
    "brace-style": ["error", "stroustrup"],
    "no-mixed-spaces-and-tabs": "error",
    "object-curly-spacing": ["error", "always"],
    "template-curly-spacing": ["error", "always"],
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "switch-colon-spacing": "error",
    "space-infix-ops": "error",
    "semi": ["error", "always"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "vue/block-lang": ["error", {
      "script": { "lang": "ts" }
    }],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }],
    "vue/html-end-tags": "error",
    "vue/html-indent": ["error", "tab", {
      "attribute": 1,
      "baseIndent": 0,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"],
      "allowEmptyLines": false
    }],
    "vue/html-quotes": ["error", "double", { "avoidEscape": true }],
    "vue/no-empty-component-block": "error",
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/no-multi-spaces": ["error", { "ignoreProperties": false }],
    "vue/one-component-per-file": "error",
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",
    "vue/v-bind-style": ["error", "shorthand"],
    "vue/v-on-event-hyphenation": ["error", "always"],
    "vue/v-on-style": ["error", "shorthand"],
    "vue/v-slot-style": ["error", "shorthand"],
    "vue/no-lone-template": ["error", {
      "ignoreAccessible": false
    }],
    "vue/no-multiple-slot-args": "warn",
    "vue/no-v-html": "warn",
    "vue/this-in-template": "error",
    "vue/array-bracket-spacing": ["error", "always"],
    "vue/brace-style": ["error", "stroustrup"],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/template-curly-spacing": ["error", "always"],
    "vue/space-infix-ops": "error",
    "vue/comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
