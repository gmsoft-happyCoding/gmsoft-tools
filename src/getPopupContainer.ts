/**
 * Select 等Antd组件getPopupContainer 公用方法
 * @function
 * @param {Element} triggerNode?
 * @example
 *  <Select getPopupContainer={getPopupContainer} {...otherProps} />
 * @returns {HTMLElement}
 */
export default function getPopupContainer(triggerNode?: Element): HTMLElement {
  // 父节点可能为null 实际应用中除极端情况外不会出现
  if (triggerNode && triggerNode.parentNode) {
    // 得到的类型是Node & ParentNode 而不是 HTMLElement
    // @ts-ignore
    return triggerNode.parentNode;
  }
  console.error('[getPopupContainer]极端情况出现', triggerNode);
  return document.getElementsByTagName('body')[0];
}
