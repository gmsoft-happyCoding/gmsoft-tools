import baseIsIE from './internal/baseIsIE';

/**
 * 调用 后台api执行文件下载
 * @function
 * @param  {string} path
 * @param  {string} name
 * @param  {string} downloadGateWay
 * @example
 * downloadFileByApi('group3/AB/12/34/123456.jpg','123456.jpg','baidu.com')
 * // => void
 * @returns {void}
 */
export default function downloadFileByApi(
  path: string,
  name: string,
  downloadGateWay: string
): void {
  let fileName = name;
  if (baseIsIE()) {
    fileName = encodeURIComponent(name);
  }
  const elemIF = top.window.document.createElement('iframe');
  elemIF.src = `${downloadGateWay}/files?filePath=${path}&fileName=${fileName}`;
  elemIF.style.display = 'none';
  top.window.document.body.appendChild(elemIF);
}
