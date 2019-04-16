import { Decimal } from 'decimal.js-light';

/**
 * @description 乘法
 * @function
 * @param {string} multiplier - 被乘数
 * @param {string} multiplicand - 乘数
 * @example
 * multiply('1.1','1.1')
 * // => '1.21'
 * @returns {string}
 */
const multiply = (multiplier: string, multiplicand: string) =>
  new Decimal(multiplier).mul(new Decimal(multiplicand)).toString();

export default multiply;
