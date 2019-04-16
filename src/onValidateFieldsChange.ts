import StringObject from './types/StringObject.d';

export type ChangeFieldsCallBack = (changedFields: any) => void;

/**
 * 表单变化 当有项目处于验证中时不予通过
 * 常用于 Form.create() onFieldsChange 时
 * @param {StringObject} changedFields 表单变化的值
 * @param {ChangeFieldsCallBack} changeCB 表单变化回调函数
 * @param {boolean} [noValidate=false] 默认false 是否关闭验证拦截
 * @example
 * Form.create({
 *  // ...,
 *  onFieldsChange(props, changedFields) {
 *   onValidateFieldsChange(changedFields, props.actions.formFieldsChange);
 *  },
 * });
 * @returns {void}
 */
export default function onValidateFieldsChange(
  changedFields: StringObject,
  changeCB: ChangeFieldsCallBack,
  noValidate: boolean = false
) {
  if (changedFields && changeCB) {
    // if 不做验证限制
    if (!noValidate) {
      // 是否通过
      let pass = true;
      Object.values(changedFields).map(value => {
        // if 该项目正在验证中 => 不予通过
        if (value.validating) {
          pass = false;
        }
      });
      if (pass) {
        changeCB(changedFields);
      }
    } else {
      changeCB(changedFields);
    }
  }
}
