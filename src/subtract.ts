import { Decimal } from 'decimal.js-light';

/**
 * @description 减法
 * @function
 * @param {string} minuend - 被减数
 * @param {string} subtrahend - 减数
 * @example
 * subtract('2.9','1.1')
 * // => '1.8'
 * @returns {string}
 */
const subtract = (minuend: string, subtrahend: string) =>
  new Decimal(minuend).sub(new Decimal(subtrahend)).toString();

export default subtract;
