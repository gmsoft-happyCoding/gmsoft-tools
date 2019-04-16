/**
 * 判定字符串是不是 数字字符串 @like '1234'
 * @param {string} testStr
 * @returns boolean
 */
const isStrNum = (testStr: string) => {
  const reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(testStr)) {
    return true;
  }
  return false;
};

export default isStrNum;
