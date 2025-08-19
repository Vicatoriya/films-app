import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tsconfigPaths = [
	'./packages/client/tsconfig.json',
	'./packages/server/tsconfig.json',
];

export default defineConfig([
	tseslint.config([
		{
			files: ['packages/{server,shared}/src/**/*.{ts,tsx}'],
			extends: [...tseslint.configs.recommendedTypeChecked],
			languageOptions: {
				parserOptions: {
					project: tsconfigPaths,
					tsconfigRootDir: __dirname,
				},
			},
		},
	]),

	tseslint.config([
		{
			files: ['packages/client/src/**/*.{ts,tsx}'],
			extends: [
				...tseslint.configs.recommendedTypeChecked,
				reactX.configs['recommended-typescript'],
				reactDom.configs.recommended,
			],
			languageOptions: {
				parserOptions: {
					project: tsconfigPaths,
					tsconfigRootDir: __dirname,
				},
			},
		},
	]),
]);
