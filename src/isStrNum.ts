/**
 * 判定字符串是不是 数字字符串 '1234'
 * @function
 * @param {string} testStr
 * @example
 * isStrNum('122.22')
 * // => true
 * @example
 * isStrNum('122.A')
 * // => false
 * @returns {boolean}
 */
const isStrNum = (testStr: string) => {
  const reg = /^(\-|\+)?\d+(\.\d+)?$/;
  if (reg.test(testStr)) {
    return true;
  }
  return false;
};

export default isStrNum;
