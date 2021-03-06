/**
 * 顶层窗口引用挂载节点
 * @returns {HTMLElement}
 */
export default function getTopRoot() {
  return (top.document.querySelector('#mount-root') as HTMLElement) || top.document.body;
}
