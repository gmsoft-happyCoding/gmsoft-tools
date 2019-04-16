import { Decimal } from 'decimal.js-light';
import isStrNum from './isStrNum';

/**
 * 判定两值相等
 * @function
 * @param {string} value - 比较值1
 * @param {string} other - 比较值2
 * @example
 * isStrNumEqual('1.1','1.10')
 * // => true
 * @example
 * isStrNumEqual('1.1','1.11')
 * // => false
 * @returns {boolean}
 */
export const isStrNumEqual = (value: string, other: string) => {
  if (isStrNum(value) && isStrNum(other)) {
    return new Decimal(value).equals(new Decimal(other));
  }
  return false;
};

export default isStrNumEqual;
