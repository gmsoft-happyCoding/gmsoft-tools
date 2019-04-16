import { Decimal } from 'decimal.js-light';

/**
 * 小于
 * @function
 * @param {string} vala
 * @param {string} valb
 * @example
 * lt('1.1','1.0')
 * // => false
 * @example
 * lt('1.1','1.1')
 * // => false
 * @example
 * lt('1.1','1.2')
 * // => true
 * @returns {boolean}
 */
const lt = (vala: string, valb: string) => new Decimal(vala).lt(valb);

export default lt;
