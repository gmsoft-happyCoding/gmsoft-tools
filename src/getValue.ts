import get from 'lodash/get';
import isNil from 'lodash/isNil';

/**
 * 安全取值，支持默认值
 * 如果目标值为null|undefined 则返回 defaultValue 或者 undefined
 * @param  {any} target
 * @param  {any} paths
 * @param  {any} defaultValue?
 * @example
 * // returns null
 * getValue(undefined,'name', null)
 * @example
 * // returns undefined
 * getValue(null,'name')
 * @example
 * // returns 'zhangsan'
 * getValue({age:12},'name','zhangsan')
 * @example
 * // returns undefined
 * getValue({age:12},'name')
 * @example
 * // returns 12
 * getValue({age:12},'age',null)
 * @returns any
 */
export default function getValue(target: any, paths: any, defaultValue?: any) {
  if (isNil(target)) {
    return defaultValue;
  }
  const value = get(target, paths);
  if (isNil(value)) {
    return defaultValue;
  }
  return value;
}
