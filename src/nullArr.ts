import loopCall from './loopCall';

/**
 * 生成一定长度的，每个子项均为null的数组
 * @param {number} len? - 生成的数组的长度
 * @example
 * nullArr()
 * // => []
 * @example
 * nullArr(2)
 * // => [null,null]
 * @example
 * nullArr(-1)
 * // => []
 * @returns {Null[]}
 */
export default function nullArr(len?: number): null[] {
  const res: null[] = [];
  if (len && len >= 1) {
    loopCall(len, () => res.push(null));
  }
  return res;
}
