module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended", // Vue 3 support
    "eslint:recommended", // Base ESLint rules
    "@vue/eslint-config-standard", // Standard JS rules for Vue
    "plugin:prettier/recommended", // Prettier integration
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off", // Disable multi-word component rule
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
  },
};
