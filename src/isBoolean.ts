/**
 * 判断是否是 布尔类型
 * @param {any} testData - 待判断的数据
 * @example
 * isBoolean(1)
 * // => false
 * @example
 * isBoolean(true)
 * // => true
 * @example
 * isBoolean(false)
 * // => false
 * @returns {boolean}
 */
export default function isBoolean(testData: any): testData is boolean {
  return Object.prototype.toString.call(testData) === '[object Boolean]';
}
