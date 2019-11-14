import { omitBy, isObject, isNil } from 'lodash';

/**
 * 清理掉对象值为null或者undefined的属性
 * @param {Object} obj
 * @example
 * validObjValue({name:null,age:12})
 * // => {age:12}
 * @returns {Object}
 */
export default function validObjValue<T extends object>(obj: T) {
  if (isObject(obj)) {
    return omitBy<T>(obj, isNil);
  }
  return obj;
}
