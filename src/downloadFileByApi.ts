import getSearch from './getSearch';

/**
 * 调用 后台api执行文件下载
 * @function
 * @param  {string} path
 * @param  {string} name
 * @param  {string} downloadGateWay
 * @param  {string} business?
 * @example
 * downloadFileByApi('group3/AB/12/34/123456.jpg','123456.jpg','baidu.com','file50m')
 * // => void
 * @returns {void}
 */
export default function downloadFileByApi(
  path: string,
  name: string,
  downloadGateWay: string,
  business?: string
): void {
  const elemIF = top!.window.document.createElement('iframe');

  elemIF.src = `${downloadGateWay}/files${getSearch({
    filePath: path,
    fileName: encodeURIComponent(name),
    business: business,
  })}`;
  elemIF.style.display = 'none';
  top!.window.document.body.appendChild(elemIF);
}
