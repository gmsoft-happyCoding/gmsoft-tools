import get from 'lodash/get';
import isNil from 'lodash/isNil';

/**
 * 安全取值，支持默认值
 * 如果目标值为 null|undefined 则返回 defaultValue
 * @function
 * @param  {any} target
 * @param  {any} paths
 * @param  {any} defaultValue?
 * @example
 * getValue(undefined,'name', null)
 * // => null
 * @example
 * getValue(null,'name')
 * // => undefined
 * @example
 * getValue({age:12},'name','zhangsan')
 * // => 'zhangsan'
 * @example
 * getValue({age:12},'name')
 * // => undefined
 * @example
 * getValue({age:12},'age',null)
 * // => 12
 * @example
 * getValue({size:null},'size','12')
 * // => '12'
 * @example
 * getValue({size:undefined},'size','12')
 * // => '12'
 * @returns {any}
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
