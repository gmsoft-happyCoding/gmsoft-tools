import { Decimal } from 'decimal.js-light';

/**
 * 小于等于
 * @param {string} vala
 * @param {string} valb
 * @returns boolean
 */
const lte = (vala: string, valb: string) => new Decimal(vala).lte(valb);

export default lte;
