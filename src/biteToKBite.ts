import { isNil, divide } from 'lodash';

/**
 * 字节转千字节 bite -> Kb
 * @param {number} bite - 待转单位的字节数
 * @returns {number} KB
 */
export default function biteToKBite(bite: number): number {
  if (!isNil(bite)) {
    // 返回 bite/1024
    return divide(bite, 1024);
  }
  return 0;
}
