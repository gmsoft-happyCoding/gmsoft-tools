import isString from 'lodash/isString';
import isNil from 'lodash/isNil';
import isArray from './isArray';

/**
 * 判定 是否是 字符串 组成的数组
 * @param {any} testArr
 * @example
 * isArrayString(['ssss','sssz'])
 * // => true
 * @example
 * isArrayString(['ssss',2])
 * // => false
 * @example
 * isArrayString(1)
 * // => false
 * @example
 * isArrayString([])
 * // => true
 * @returns {boolean}
 */
const isArrayString = (testArr: any): testArr is string[] => {
  if (isArray(testArr)) {
    if (testArr.length === 0) {
      return true;
    }
    return isNil(testArr.find(item => !isString(item)));
  }
  return false;
};

export default isArrayString;
