import BoolNum from './types/BoolNum.d';

/**
 * boolean 转 0 | 1
 * @param {boolean} bool - true|false
 * @example
 * boolToBoolNum(true)
 * // => 1
 * @example
 * boolToBoolNum(false)
 * // => 0
 * @example
 * boolToBoolNum(3)
 * // => Error
 * @returns {BoolNum}
 */
export default function boolToBoolNum(bool: boolean): BoolNum {
  if (bool === true) {
    return 1;
  }
  if (bool === false) {
    return 0;
  }
  throw Error('boolToBoolNum-参数错误' + bool);
}
