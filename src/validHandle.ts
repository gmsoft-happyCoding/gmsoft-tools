import lodashIsNil from 'lodash/isNil';
import reduce from 'lodash/reduce';
import isFunction from 'lodash/isFunction';
import isArray from './isArray';
import Many from './types/Many.d';

type Handle = (val: any) => any;

type ValueHandle = Many<Handle>;

/**
 * 值有效无效（满足条件与否）的处理
 * @param {any} target - 待判定的值
 * @param {ValueHandle} validHandle - 判定有效时调用的 函数|函数[]
 * @param {ValueHandle} inValidHandle - 判定无效时调用的 函数|函数[]
 * @param {Function} isValid - 是否有效 的判定函数，=> true 有效 ，=> false 无效
 * @example
 * import {toString,isArray,reduce} from lodash;
 *
 * validHandle([1,2,3], [val => reduce(val, (sum,val) => (sum + val), 0), toString], ()=> '0', isArray);
 * // => '6'
 * validHandle('string', [val => reduce(val, (sum,val) => (sum + val), 0), toString], ()=> '0', isArray);
 * // => '0'
 * @returns {any}
 */
export default function validHandle(
  target: any,
  validHandle: ValueHandle,
  inValidHandle: ValueHandle,
  isValid?: (val: any) => boolean
) {
  let doValid = (val: any) => !lodashIsNil(val);
  if (!lodashIsNil(isValid)) {
    doValid = isValid;
  }
  if (doValid(target)) {
    if (isArray<Handle>(validHandle)) {
      return reduce<Handle, any>(validHandle, (val, handle) => handle(val), target);
    }
    if (isFunction(validHandle)) {
      return validHandle(target);
    }
  } else {
    if (isArray<Handle>(inValidHandle)) {
      return reduce<Handle, any>(inValidHandle, (val, handle) => handle(val), target);
    }
    if (isFunction(inValidHandle)) {
      return inValidHandle(target);
    }
  }
}
