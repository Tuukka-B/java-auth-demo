import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import vuePlugin from 'rollup-plugin-vue';

const getBabelOptions = ({ useESModules }) => ({
    exclude: '**/node_modules/**',
    runtimeHelpers: true,
    plugins: [['@babel/transform-runtime', { regenerator: false, useESModules }]],
  })

export default {
    input: './src/index.js',
    output: {
        file: './dist/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel(getBabelOptions({ useESModules: true })),,
        resolve(),
        commonjs(),
        terser(),
        vuePlugin(/* options */),
        
    ]
}
