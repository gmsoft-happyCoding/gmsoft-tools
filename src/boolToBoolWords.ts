/**
 * @description  bool值 转 文字(是|否)
 * @param {boolean} bool
 * @example
 * boolToBoolWords(false)
 * // => '否'
 * @example
 * boolToBoolWords(true)
 * // => '是'
 * @example
 * boolToBoolWords(1)
 * // => Error
 * @returns {string}
 */
export default function boolToBoolWords(bool: boolean): string {
  if (bool === true) {
    return '是';
  }
  if (bool === false) {
    return '否';
  }
  throw Error('boolToBoolWords-参数错误' + bool);
}
