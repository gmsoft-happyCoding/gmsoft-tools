import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';

/**
 * @description 安全解析 JSON数组
 * 如果解析结果不是数组则视为无效，返回defaultValue||[]
 * @author GM20171202
 * @param  {string} jsonArr - 待解析的JSON数组
 * @param  {any[]} [defaultValue=[]] - 解析失败的默认值
 * @returns any[]
 */
export default function parseJSONArr(jsonArr: string, defaultValue: any[] = []): any[] {
  if (!isNil(jsonArr)) {
    let result: any[] | undefined;
    try {
      result = JSON.parse(jsonArr);
    } catch (e) {
      result = undefined;
    }
    if (result !== undefined && isArray(result)) {
      return result;
    }
  }
  return defaultValue;
}
