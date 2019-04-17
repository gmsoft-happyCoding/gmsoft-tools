/**
 * 安全解析JSON
 * @param {string} json - 待解析JSON字符串
 * @param {any} defaultValue? - 解析失败的默认值 可不传
 * @returns {any}
 */
export default function parseJSON(json: string, defaultValue?: any): any {
  if (json) {
    try {
      return JSON.parse(json);
    } catch (e) {
      return defaultValue;
    }
  }
  return defaultValue;
}
