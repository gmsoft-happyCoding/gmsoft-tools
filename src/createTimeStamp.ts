/**
 * 创建一个时间戳
 * @function
 * @param  {Date} [date=new Date()] - 需要转换的Date对象 默认取当前时间
 * @example
 * createTimeStamp()
 * // => 1555402982554
 * @example
 * createTimeStamp(new Date('2012-12-24 12:33:14'))
 * // => 1356323594000
 * @returns {number}
 */
export default function createTimeStamp(date: Date = new Date()): number {
  return +date;
}
