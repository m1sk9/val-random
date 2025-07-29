import { defineConfig } from '@farmfe/core';

export default defineConfig({
	plugins: ['@farmfe/plugin-react', '@farmfe/plugin-react-components'],
	compilation: {
		input: {
			index: './src/pages/index.html',
		},
	},
	server: {
		port: 9000,
	},
});
