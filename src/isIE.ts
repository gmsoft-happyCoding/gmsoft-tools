import baseIsIE from './internal/baseIsIE';

/**
 * 判定当前浏览器是否是IE浏览器
 * @function
 * @example
 * isIE()
 * // => false
 * @returns {void}
 */
export default function isIE() {
  return baseIsIE();
}
