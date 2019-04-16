import { Decimal } from 'decimal.js-light';

/**
 * @description 加法
 * @function
 * @param {string} augend - 被加数
 * @param {string} addend - 加数
 * @example
 * add('1.1','1.8')
 * // => '2.9'
 * @returns {string}
 */
const add = (augend: string, addend: string) =>
  new Decimal(augend).add(new Decimal(addend)).toString();

export default add;
