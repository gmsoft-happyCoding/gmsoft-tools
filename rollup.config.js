import fs from 'fs';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

var filePath = 'src';
var inputFiles = [];
//根据文件路径读取文件，返回文件列表
fs.readdirSync(filePath).forEach(function (filename) {
  const includePattern = /\.(t|j)s$/;
  const excludePattern = /\.test\.(t|j)s$/;
  if (filename.match(includePattern) && !filename.match(excludePattern)) {
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
    url(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
  ],
};
