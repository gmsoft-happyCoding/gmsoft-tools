import { sample } from 'lodash';

import nullArr from './nullArr';

const DEFAULT_CHARS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

/**
 * 传入参数对象，返回类hash字符串
 * @param {StringObject} params
 * @example
 * hash()
 * // => 'TPCvZq'
 * @example
 * hash({len:3})
 * // => 'fTb'
 * @example
 * hash({chars:['A','B','C']})
 * // => 'CBBBBA'
 * @example
 * hash({chars:['A','B','C'],len:12})
 * // => 'CABABBABBCBA'
 * @returns {string}
 */
export default function hash(params?: { len?: number; chars?: string[] }) {
  return nullArr((params && params.len) || 6)
    .map(() => sample((params && params.chars) || DEFAULT_CHARS))
    .join('');
}
