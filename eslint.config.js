import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  eslintConfigPrettier,
  ...eslintPluginAstro.configs['flat/recommended'],
];