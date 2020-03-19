/**
 * 回调函数
 * @callback callback
 * @param {number} count - 当前是第几次
 * @returns {any} - 若返回 true 则执行 break，不再循环
 */

/**
 * 循环调用数次，func
 * @param {number} times - 循环调用的次数，如果小于1则一次都不会调用
 * @param {callback} cb - 执行调用的回调函数
 * @example
 * loopCall(2,(count)=>{console.log(count)})
 * // 1
 * // 2
 * @example
 * loopCall(1,(count)=>{console.log(count);return count === 1})
 * // 1
 * @returns {void}
 */
export default function loopCall(times: number, cb: (count: number) => any) {
  let index = 1;
  for (index; index <= times; index++) {
    const doBreak = cb(index);
    if (doBreak === true) {
      index += times + 1;
      break;
    }
  }
}
