import { isString } from 'lodash';

/**
 * 判定是不是非空的字符串
 * @param str
 * @example
 * isNonEmptyStr(3)
 * // => false
 * @example
 * isNonEmptyStr()
 * // => false
 * @example
 * isNonEmptyStr('')
 * // => false
 * @example
 * isNonEmptyStr('3')
 * // => true
 * @returns {boolean}
 */
export default function isNonEmptyStr(str: any): str is string {
  return isString(str) && str.length > 0;
}
