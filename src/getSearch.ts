import { isNil, isObject, isEmpty, toPairs, omitBy } from 'lodash';
import StringObject from './types/StringObject.d';

/**
 * 传入参数对象，返回search结构的字符串
 * @param {StringObject} params
 * @example
 * getSearch()
 * // => ''
 * @example
 * getSearch('string')
 * // => ''
 * @example
 * getSearch({})
 * // => ''
 * @example
 * getSearch({name:'kangkang',age:12})
 * // => '?name=kangkang&age=12'
 * @example
 * getSearch({name:null,age:12})
 * // => '?age=12'
 * @returns {string}
 */
export default function getSearch(params: StringObject) {
  if (isNil(params) || !isObject(params) || isEmpty(params)) {
    return '';
  }
  return toPairs(omitBy(params, isNil))
    .map((item, index) => {
      if (index === 0) {
        return `?${item[0]}=${item[1]}`;
      } else {
        return `&${item[0]}=${item[1]}`;
      }
    })
    .join('');
}
