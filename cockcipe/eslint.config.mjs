// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17 이상에서 JSX 사용 시 필요 없음
    },
  },
  // JavaScript 기본 권장 설정
  pluginJs.configs.recommended,
  // TypeScript 권장 설정
  ...tseslint.configs.recommended,
  // React 권장 설정
  pluginReactConfig,
];
