const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  let codedStr = '';
  let current = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === current) {
      count++;
    } else {
      codedStr += (count > 1 ? count : '') + current;
      current = str[i];
      count = 1;
    }
  }
  codedStr += (count > 1 ? count : '') + current;
  return codedStr;
}

module.exports = {
  encodeLine
};
