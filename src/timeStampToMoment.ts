import moment from 'moment';
import * as Monent from 'moment/moment.d';

/**
 * 时间戳转moment对象
 * @function
 * @param  {number} timeStamp
 * @example
 * timeStampToMoment(1555344000000)
 * // => momentObj
 * @returns {Monent.Moment}
 */
export default function timeStampToMoment(timeStamp: number): Monent.Moment {
  return moment(timeStamp);
}
