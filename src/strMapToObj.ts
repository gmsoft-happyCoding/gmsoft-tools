/**
 * @description Map 转 Object
 * @function
 * @param {Map<string, any>} strMap - key string 的 Map
 * @example
 * strMapToObj(new Map([['name', '张三'],['title', 'Author']]))
 * // => {name:'张三',title:'Author'}
 * @returns {object}
 */
export default function strMapToObj(strMap: Map<string, any>) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
