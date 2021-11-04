const match = function (str1, str2) {
  return str1 === str2 ? 0 : 1;
};

// 求 list1 和 list2 的编辑距离
// levenshteinDistance('saturday', 'sunday', match)
// => 3
function levenshteinDistance(str1: string, str2: string) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: any = []; // 表格
  let left;
  let over;
  let leftOver;

  // 填写表格的第一行和第一列
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [];
    matrix[i][0] = i;
  }
  for (let i = 0; i <= len2; i++) {
    matrix[0][i] = i;
  }

  // 自底向上推导
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      over = matrix[i][j - 1];
      left = matrix[i - 1][j];
      leftOver = matrix[i - 1][j - 1];
      matrix[i][j] = Math.min(left + 1, over + 1, leftOver + match(str1[i - 1], str2[j - 1]));
    }
  }
  // 将最后一个单元格的值返回
  return matrix[len1][len2];
}

/**
 * @description 计算两字符串相似度，返回 0 - 1 之前的小数，数值越大相似度越高
 * @function
 * @param 目标字符串A
 * @param 目标字符串B
 * @returns {number}
 */
export default function getSimilarity(str1: string, str2: string): number {
  const maxLen = str1.length > str2.length ? str1.length : str2.length;
  const editDistance = levenshteinDistance(str1, str2);
  return (maxLen - editDistance) / maxLen;
}
