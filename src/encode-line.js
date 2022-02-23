const { NotImplementedError } = require("../extensions/index.js");

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
  let currentLetter,
    count = 0;
  let encodeStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      currentLetter = str[i];
      count = 1;
      continue;
    }
    if (currentLetter !== str[i]) {
      encodeStr += count > 1 ? "" + count + currentLetter : currentLetter;
      currentLetter = str[i];
      count = 1;
      continue;
    }
    count++;
  }
  if (encodeStr.length > 0) {
    encodeStr += count > 1 ? "" + count + currentLetter : currentLetter;
  }
  return encodeStr;
}

module.exports = {
  encodeLine,
};
