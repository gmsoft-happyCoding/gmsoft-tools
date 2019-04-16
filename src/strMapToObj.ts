/**
 * @description Map 转 Object
 * @author GM20171202
 * @param {Map<string, any>} strMap - key string 的 Map
 * @returns object
 */
export default function strMapToObj(strMap: Map<string, any>) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
