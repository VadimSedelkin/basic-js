const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = "" + n;
  let maxValue = 0;
  let currentN;
  for(let i = 0; i < n.length; i++){
    currentN = +(n.slice(0, i) + n.slice(i+1));
    if(currentN > maxValue){
      maxValue = currentN;
    }
  }
  return maxValue;
}

module.exports = {
  deleteDigit
};
