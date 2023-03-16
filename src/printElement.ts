/**
 * 打印页面元素(局部打印)
 * @function
 * @param  {HTMLElement | string} element - 待打印元素
 * @param  {string} [style] - 添加到打印页面的样式
 * @example
 * printElement('#print-element');
 * @example
 * printElement('#print-element', `@page{margin: 10mm}`);
 * @returns {undefined}
 */
export default function printElement(element: HTMLElement | string, style?: string) {
  const _element = typeof element === 'string' ? document.querySelector(element) : element;

  if (!_element) return;

  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'width:0px;height:0px;');

  document.body.appendChild(iframe);

  const win = iframe ? iframe.contentWindow : null;
  const doc = win ? win.document : null;

  if (win && doc) {
    doc.open();
    doc.write(`<style media="print">
      @page {size: auto;  margin: 8mm; }
      ${style}
    </style>`);
    doc.write(document.head.innerHTML);
    doc.write(_element.innerHTML);
    doc.close();

    doc.addEventListener('DOMContentLoaded', () => {
      win.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
      });
    });
  }
}
