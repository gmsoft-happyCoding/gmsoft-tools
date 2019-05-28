import { Decimal } from 'decimal.js-light';
import isNil from 'lodash/isNil';
import isNaN from 'lodash/isNaN';

/**
 * 格式化数字或数字字符串为￥开头的货币格式,可指定单位名称以及单位位置
 * @function
 * @param  {string|number} money
 * @param  {number} [float=2]
 * @param  {string} [unit='￥']
 * @param  {'before'|'after'} [unitPosition='before']
 * @example
 * currency(20000)
 * // => '￥20,000.00'
 * @example
 * currency('20000',3)
 * // => '￥20,000.000'
 * @example
 * currency('20000',undefined,'$')
 * // => '$20,000.00'
 * @example
 * currency('20000',undefined,"元","after",)
 * // => '20,000.00元'
 * @example
 * currency(null)
 * // => undefined
 * @example
 * currency(undefined)
 * // => undefined
 * @example
 * currency(NaN)
 * // => undefined
 * @example
 * currency('')
 * // => undefined
 * @returns {string}
 */
export default function currency(
  money: string | number,
  float: number = 2,
  unit: string | null = '￥',
  unitPosition: 'before' | 'after' = 'before'
): string | undefined {
  if (isNil(money) || isNaN(money) || money === '') {
    return undefined;
  }
  const fixedMoney = new Decimal(money).toFixed(float);
  const fixedMoneyVals = fixedMoney.split('.');
  let formatVal = `.${fixedMoneyVals[1]}`;
  const len = fixedMoneyVals[0].length;
  let index = len - 1;
  let modIx = 1;
  for (index; index >= 0; index--) {
    if (modIx % 3 === 0) {
      formatVal = `,${fixedMoneyVals[0][index]}${formatVal}`;
    } else {
      formatVal = `${fixedMoneyVals[0][index]}${formatVal}`;
    }
    modIx++;
  }
  if (formatVal.startsWith(',')) {
    formatVal = formatVal.substring(1);
  }
  if (unit !== null) {
    return unitPosition === 'before' ? `${unit}${formatVal}` : `${formatVal}${unit}`;
  }
  return formatVal;
}
