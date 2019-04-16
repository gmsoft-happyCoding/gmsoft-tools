import isNil from 'lodash/isNil';
import isString from 'lodash/isString';

/**
 * @description 从文件名中提取后缀名
 * @param string fileName - 文件名
 * @example
 * currency('helloWorld.svg')
 * // => 'svg'
 * @returns string | undefined
 */
export default function getSuffix(fileName: string): string | undefined {
  if (!isNil(fileName) && isString(fileName) && fileName.includes('.')) {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
  }
  return undefined;
}
