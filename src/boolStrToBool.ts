import BoolStr from './types/BoolStr.d';

/**
 * 布尔型字符串 转为布尔值 'boolean' -> boolean
 * @param {string} boolStr
 * @example
 * boolStrToBool('false')
 * // => false
 * @example
 * boolStrToBool('true')
 * // => true
 * @example
 * boolStrToBool(false)
 * // => Error
 * @returns {boolean}
 */
export default function boolStrToBool(boolStr: BoolStr): boolean {
  if (boolStr === 'true') {
    return true;
  }
  if (boolStr === 'false') {
    return false;
  }
  throw Error('boolStrToBool，参数无效' + boolStr);
}
