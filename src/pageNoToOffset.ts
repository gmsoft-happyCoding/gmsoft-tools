/**
 * pageNo 转 offset
 * pageNo转索引值
 * @param {number} pageNo [1,?] 页码
 * @param {number} pageSize 每页条数 可不传，默认为10
 * @return {number} offset [0,?] 索引值 默认传回 0
 */
export default function pageNoToOffset(pageNo: number, pageSize: number = 10) {
  if (pageNo && pageNo >= 1) {
    return pageSize * (pageNo - 1);
  }
  return 0;
}
