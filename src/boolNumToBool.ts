import BoolNum from './types/BoolNum.d';

/**
 * 0|1 转boolean
 * @param {BoolNum} boolNum - 0|1
 * @example
 * boolNumToBool(1)
 * // => true
 * @example
 * boolNumToBool(0)
 * // => false
 * @example
 * boolNumToBool(3)
 * // => Error
 * @returns {boolean}
 */
export default function boolNumToBool(boolNum: BoolNum): boolean {
  if (boolNum === 1) {
    return true;
  }
  if (boolNum === 0) {
    return false;
  }
  throw Error('boolNumToBool-参数错误' + boolNum);
}
