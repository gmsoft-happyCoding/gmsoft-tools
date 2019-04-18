function isArray(testData: any): testData is any[];

function isArray<T>(testData: any): testData is T[];

/**
 * 校验 是不是数组，解决 @types/lodash.d 中 重载被弃用
 * @param {any} testData
 * @example
 * isArray(null);
 * // => false
 * @example
 * isArray([null]);
 * // => true
 * @example
 * isArray<T>(array): array is T[];
 * // => true
 * // 注意，此处并未做T的类型校验，仅作类型保护
 * @returns {boolean}
 */
function isArray(testData) {
  return Object.prototype.toString.call(testData) === '[object Array]';
}

export default isArray;
