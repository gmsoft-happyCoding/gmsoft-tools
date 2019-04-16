import toString from 'lodash/toString';
import baseIsIE from './internal/baseIsIE';

/**
 * 调用 后台api执行文件下载
 * @param  {string} path
 * @param  {string} name
 * @param  {string} [downloadGateWay=toString(process.env.REACT_APP_API_DJC_GATEWAY)]
 * 如果不传入 则项目需配置 env REACT_APP_API_DJC_GATEWAY
 * @returns void
 */
export default function useApiDownloadFile(
  path: string,
  name: string,
  downloadGateWay: string = toString(process.env.REACT_APP_API_DJC_GATEWAY)
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
