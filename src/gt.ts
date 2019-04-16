import { Decimal } from 'decimal.js-light';

/**
 * 字符串数字 大于
 * @function
 * @param {string} vala
 * @param {string} valb
 * @example
 * gt('1.2','1.1')
 * // => true
 * @example
 * gt('1.2','1.3')
 * // => false
 * @returns {boolean}
 */
const gt = (vala: string, valb: string) => new Decimal(vala).gt(valb);

export default gt;
