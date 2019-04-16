import { Decimal } from 'decimal.js-light';

/**
 * 小于等于
 * @function
 * @param {string} vala
 * @param {string} valb
 * @example
 * lte('1.1','1.0')
 * // => false
 * @example
 * lte('1.1','1.1')
 * // => true
 * @example
 * lte('1.1','1.2')
 * // => true
 * @returns {boolean}
 */
const lte = (vala: string, valb: string) => new Decimal(vala).lte(valb);

export default lte;
