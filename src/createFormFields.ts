import { Form } from 'antd';
import StringObject from './types/StringObject.d';

/**
 * 表单赋值处理函数
 * 常用于 Form.create() mapPropsToFields 时 将props.formFields 转为 Form需要的Fields对象
 * @param {StringObject} formFields
 * @param {any} [createFormFieldCLI = Form.createFormField]
 * @example
 * Form.create({
 *  mapPropsToFields(props: Props) {
 *    return createFormField(props.formFields);
 *  },
 *  // ...
 * })
 * @returns {StringObject}
 */
export default function createFormFields(
  formFields: StringObject,
  createFormFieldCLI: any = Form.createFormField
) {
  const result: StringObject = {};
  if (formFields) {
    Object.keys(formFields).map(key => {
      result[key] = createFormFieldCLI(formFields[key]);
    });
  }
  return result;
}
