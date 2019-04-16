import { Decimal } from 'decimal.js-light';

/**
 * 小于
 * @param {string} vala
 * @param {string} valb
 * @returns boolean
 */
const lt = (vala: string, valb: string) => new Decimal(vala).lt(valb);

export default lt;
