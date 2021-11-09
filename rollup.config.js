import commonJS from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import rollup from 'rollup';
rollup;
import typescript from 'rollup-plugin-typescript2';

const parserOptions = {
	sourceType: 'module'
};

export default [
	{
		context: 'this',
		input: 'src/extension.ts',
		output: [
			{
				file: 'dist/extension.bundle.js',
				format: 'commonjs',
				plugins: [terser()]
			},
		],
		plugins: [
			resolve(),
			commonJS(),
			typescript({
				tsconfigOverride: {
					compilerOptions: {
						declaration: false
					},
				},
			}),
			filesize({
				showMinifiedSize: true,
				showBrotliSize: true
			}),
		],
	},
];