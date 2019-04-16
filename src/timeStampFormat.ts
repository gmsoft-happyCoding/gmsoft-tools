import moment from 'moment';

/**
 * 时间戳格式化
 * @function
 * @param  {number} timeStamp
 * @param  {string} [formatType='YYYY-MM-DD'] - format 模板 默认'YYYY-MM-DD'
 * @see http://momentjs.cn/docs/#/parsing/string-format/
 * @example
 * timeStampToDate(1555402982554)
 * // => '2019-04-16'
 * @example
 * timeStampToDate(1555402982554,"YYYY年MM月DD日")
 * // => '2019年04月16日'
 * @example
 * timeStampToDate(1555403211557,"YYYY-MM-DD hh:mm:ss")
 * // => '"2019-04-16 04:26:51"'
 * @returns {string}
 */
export default function timeStampFormat(
  timeStamp: number,
  formatType: string = 'YYYY-MM-DD'
): string {
  return moment(timeStamp).format(formatType);
}
