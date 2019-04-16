/*
 * @Author: GM20171202
 * @Date: 2019-04-16 10:42:05
 * @Last Modified by: GM20171202
 * @Last Modified time: 2019-04-16 10:42:56
 */
import UAParser from 'ua-parser-js';

const parser = new UAParser();
const result = parser.getResult();

// 是否是 IE
const baseIsIE = () => result.browser.name === 'IE';

export default baseIsIE;
