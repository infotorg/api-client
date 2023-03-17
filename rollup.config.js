import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/api-client.js',
  output: [
    {
      file: 'dist/api-client.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/api-client.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/api-client.umd.js',
      format: 'umd',
      name: 'ApiClient',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
