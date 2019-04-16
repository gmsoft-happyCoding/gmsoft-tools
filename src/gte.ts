import { Decimal } from 'decimal.js-light';

/**
 * 字符串数字 大于等于
 * @function
 * @param {string} vala
 * @param {string} valb
 * @example
 * gte('1.2','1.2')
 * // => true
 * @example
 * gte('1.2','1.3')
 * // => false
 * @returns {boolean}
 */
const gte = (vala: string, valb: string) => new Decimal(vala).gte(valb);

export default gte;
