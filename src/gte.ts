import { Decimal } from 'decimal.js-light';

/**
 * 大于等于
 * @param {string} vala
 * @param {string} valb
 * @returns boolean
 */
const gte = (vala: string, valb: string) => new Decimal(vala).gte(valb);

export default gte;
