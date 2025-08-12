import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
	tseslint.config([
		{
			files: ['src/**/*.{ts,tsx}'],
			extends: [
				...tseslint.configs.recommendedTypeChecked,
				reactX.configs['recommended-typescript'],
				reactDom.configs.recommended,
			],
			languageOptions: {
				parserOptions: {
					project: ['./tsconfig.json'],
					tsconfigRootDir: import.meta.dirname,
				},
			},
		},
	]),
]);
