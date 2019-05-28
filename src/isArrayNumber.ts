import isNumber from 'lodash/isNumber';
import isNil from 'lodash/isNil';
import isArray from './isArray';

/**
 * 判定 是否是 数字 组成的数组
 * @param {any} testArr
 * @example
 * isArrayNumber([2,1])
 * // => true
 * @example
 * isArrayNumber(['ssss',2])
 * // => false
 * @example
 * isArrayNumber(1)
 * // => false
 * @example
 * isArrayNumber([])
 * // => true
 * @returns {boolean}
 */
const isArrayNumber = (testArr: any): testArr is number[] => {
  if (isArray(testArr)) {
    if (testArr.length === 0) {
      return true;
    }
    return isNil(testArr.find(item => !isNumber(item)));
  }
  return false;
};

export default isArrayNumber;
