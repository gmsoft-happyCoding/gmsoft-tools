import { Decimal } from 'decimal.js-light';

/**
 * @description 除法
 * @function
 * @param {string} dividend - 被除数
 * @param {string} divisor - 除数
 * @example
 * divide('1.21','1.1')
 * // => '1.1'
 * @returns {string}
 */
const divide = (dividend: string, divisor: string) =>
  new Decimal(dividend).div(new Decimal(divisor)).toString();

export default divide;
