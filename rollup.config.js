import fs from 'fs';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

var filePath = 'src';
var inputFiles = [];
//根据文件路径读取文件，返回文件列表
fs.readdirSync(filePath).forEach(function(filename) {
  if (filename.endsWith('.ts') || filename.endsWith('.js')) {
    inputFiles.push(filePath + '/' + filename);
  }
});

export default {
  input: inputFiles,
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
    {
      dir: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      entryFileNames: '[name].js',
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
  ],
};
