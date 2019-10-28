import {
  isNil,
  isString,
  isNumber,
  isNaN,
  isObject,
  isEmpty as _isEmpty,
  isMap,
  isSet,
} from 'lodash';

import isArray from './isArray';

function isEmpty(val: undefined): true;
function isEmpty(val: null): true;
function isEmpty(val: string): boolean;
function isEmpty(val: number): boolean;
function isEmpty(val: any[]): boolean;
function isEmpty(val: Set<any>): boolean;
function isEmpty(val: Map<any, any>): boolean;
function isEmpty(val: object): boolean;

/**
 * 判定 是否为空
 * @param {any} val
 * @example
 * isEmpty(undefined)
 * // => true
 * @example
 * isEmpty(null)
 * // => true
 * @example
 * isEmpty([])
 * // => true
 * @example
 * isEmpty({})
 * // => true
 * @example
 * isEmpty('')
 * // => true
 * @example
 * isEmpty(NaN)
 * // => true
 * @example
 * isEmpty(new Map())
 * // => true
 * @example
 * isEmpty(new Set())
 * // => true
 * @example
 * isEmpty(0)
 * // => false
 * @returns {boolean}
 */
function isEmpty(val) {
  if (isNil(val)) {
    return true;
  }
  if (isString(val)) {
    return val.length === 0;
  }
  if (isNumber(val)) {
    return isNaN(val);
  }
  if (isArray(val)) {
    return val.length === 0;
  }
  if (isSet(val)) {
    return val.size === 0;
  }
  if (isMap(val)) {
    return val.size === 0;
  }
  if (isObject(val)) {
    return _isEmpty(val);
  }
  return true;
}

export default isEmpty;
