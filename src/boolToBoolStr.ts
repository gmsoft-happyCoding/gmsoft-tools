import BoolStr from './types/BoolStr.d';

/**
 * 布尔值转布尔型字符串 boolean -> 'boolean'
 * @param {boolean} bool
 * @example
 * boolToBoolStr(true)
 * // => 'true'
 * @example
 * boolToBoolStr(false)
 * // => 'false'
 * @example
 * boolToBoolStr(undefined)
 * // => Error()
 * @returns {BoolStr}
 */
export default function boolToBoolStr(bool: boolean): BoolStr {
  if (bool === true) {
    return 'true';
  }
  if (bool === false) {
    return 'false';
  }
  throw Error('boolToBoolStr,参数无效！' + bool);
}
