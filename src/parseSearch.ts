import StringObject from './types/StringObject.d';
import isNonEmptyStr from './isNonEmptyStr';

/**
 * 解析 search
 * @param {string} searchStr
 * @example
 * parseSearch()
 * // => {}
 * @example
 * parseSearch('')
 * // => {}
 * @example
 * parseSearch('?name=kangkang&age=12')
 * // => {name: "kangkang", age: "12"}
 * @returns {StringObject}
 */
export default function parseSearch(searchStr: string): StringObject {
  const searchParam: StringObject = {};
  if (isNonEmptyStr(searchStr) && searchStr.startsWith('?')) {
    try {
      decodeURIComponent(searchStr)
        .substring(1)
        .split('&')
        .map(item => {
          // 'name=aa' -> ['name','aa']
          const itemKeys = item.split('=');
          // ['name','aa'] -> {name:'aa'}
          searchParam[itemKeys[0]] = itemKeys[1];
        });
    } catch (e) {
      return {};
    }
  }
  return searchParam;
}
