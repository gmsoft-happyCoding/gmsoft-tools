import moment from 'moment';

/**
 * 时间戳转moment对象
 * @function
 * @param  {number} timeStamp
 * @example
 * timeStampToMoment(1555344000000)
 * // => momentObj
 * @returns {moment.Moment}
 */
export default function timeStampToMoment(timeStamp: number): moment.Moment {
  return moment(timeStamp);
}
