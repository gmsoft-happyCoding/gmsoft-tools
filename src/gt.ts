import { Decimal } from 'decimal.js-light';

/**
 * 大于
 * @param {string} vala
 * @param {string} valb
 * @returns boolean
 */
const gt = (vala: string, valb: string) => new Decimal(vala).gt(valb);

export default gt;
