import StringObject from './types/StringObject.d';

/**
 * @description 判定表单是否只有某项变更了值
 * @param {StringObject} changedFields - 表单值对象
 * @param {string} itemKey - 需鉴定的子项的key
 * @example
 * isOnlyFormFieldChange({name:{}, age:{}})
 * // => false
 * @returns {boolean}
 */
export default function isOnlyFormFieldChange(changedFields: StringObject, itemKey: string) {
  return (
    changedFields &&
    itemKey &&
    Object.keys(changedFields).length === 1 &&
    changedFields[itemKey] &&
    !changedFields[itemKey].validating
  );
}
