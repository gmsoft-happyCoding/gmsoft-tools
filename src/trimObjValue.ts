import { cloneDeep, isObject, isString, trim } from 'lodash';

import StringObject from './types/StringObject';

/**
 * 移除对象值为string的前后空格，值不是string不作处理
 * @param {StringObject} obj
 * @example
 * trimObjValue({name:'kk ',age:12})
 * // => {name:'kk',age:12}
 * @returns {StringObject}
 */
export default function trimObjValue(obj: StringObject): StringObject {
  if (isObject(obj)) {
    const resultObj = cloneDeep(obj);
    Object.keys(obj).map(key => {
      if (isString(obj[key])) {
        resultObj[key] = trim(obj[key]);
      }
    });
    return resultObj;
  }
  return obj;
}
