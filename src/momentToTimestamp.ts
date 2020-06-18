import moment from 'moment';

/**
 * @description moment对象转时间戳
 * @function
 * @param {moment.Moment} momentObj - 待转换的moment对象
 * @param {string} [formatType='YYYY-MM-DD'] - format 模板 默认'YYYY-MM-DD'即去掉时分秒精度
 * @example
 * timeStampToDate(moment())
 * // => 1555344000000
 * @example
 * timeStampToDate(moment(),"YYYY-MM-DD hh:mm:ss")
 * // => 1555360961000
 * @returns {number}
 */
export default function momentToTimestamp(
  momentObj: moment.Moment,
  formatType: string = 'YYYY-MM-DD'
) {
  return moment(momentObj.format(formatType)).valueOf();
}
