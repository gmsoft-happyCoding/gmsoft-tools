import toNumber from 'lodash/toNumber';
import get from 'lodash/get';

/**
 * 从response headers 中取出x-total-count
 * @function
 * @param  {any} response
 * @param  {number} [defaultValue=0]
 * @example
 * getTotalInResHeader(response)
 * // => '20'
 * @returns {number}
 */
export default function getTotalInResHeader(response: any, defaultValue: number = 0): number {
  return toNumber(get(response, 'headers.x-total-count', defaultValue));
}
