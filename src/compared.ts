import { Decimal } from 'decimal.js-light';

/**
 * 判定大小
 * @function
 * @example
 * compared('1.0','1.1')
 * // => -1
 * @example
 * compared('1.1','1.1')
 * // => 0
 * @example
 * compared('1.2','1.1')
 * // => 1
 * @example
 * compared(NaN,'1.1')
 * // => NaN
 * @param {string} vala
 * @param {string} valb
 * @returns {number}} -1|0|1|NaN
 */
const compared = (vala: string, valb: string) => new Decimal(vala).cmp(valb);

export default compared;
