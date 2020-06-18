import { memoize } from 'lodash';
import sha1 from 'js-sha1';

/**
 * 创建一个会缓存 func 结果的函数
 * 包装了 lodash的 memoize
 * @see https://www.html.cn/doc/lodash/#_memoizefunc-resolver
 * @function
 * @param {Function} func 目标函数
 * @example
 * let count = 0;
 * const add1 = a => {
 *  count++;
 *  console.log('count=',count);
 *  return a+1;
 * }
 * memo(1);
 * // => 2
 * // 输出 count=1
 * memo(2);
 * // => 3
 * // 输出 count=2
 * memo(1);
 * // => 2
 * // 输出 count=2
 * @returns {Function} - 返回缓存化后的函数
 */
export default function memo(func) {
  return memoize(func, (...agrs) => sha1(JSON.stringify(agrs)));
}
