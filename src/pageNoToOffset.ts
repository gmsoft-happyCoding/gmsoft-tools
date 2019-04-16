/**
 * pageNo转索引值
 * @function
 * @param {number} pageNo 页码
 * @param {number} pageSize 每页条数 可不传，默认为10
 * @example
 * pageNoToOffset(1,15)
 * // => '0'
 * @example
 * pageNoToOffset(16,10)
 * // => '150'
 * @returns {number} - offset 索引值 默认传回 0
 */
export default function pageNoToOffset(pageNo: number, pageSize: number = 10) {
  if (pageNo && pageNo >= 1) {
    return pageSize * (pageNo - 1);
  }
  return 0;
}
