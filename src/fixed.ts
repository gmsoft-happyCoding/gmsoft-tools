import { Decimal } from 'decimal.js-light';

/**
 * 数字字符串 四舍五入
 * @param {string|number} handle - 待处理值
 * @param {number} fixedNum - 保留位数
 * @example
 * fixed('3.456',2)
 * // => '3.46'
 * @example
 * fixed('3.456',5)
 * // => '3.45600'
 * @returns string
 */
const fixed = (handle: string | number, fixedNum: number) =>
  new Decimal(handle).toFixed(fixedNum).toString();

export default fixed;
