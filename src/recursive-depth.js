const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, level = 1) {
    let currentLevel;
    let maxLevel = level;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] instanceof Array){
        currentLevel = this.calculateDepth(arr[i], level+1);
        maxLevel = (maxLevel < currentLevel) ? currentLevel : maxLevel; 
      }
    }
    return maxLevel;
  }
}

module.exports = {
  DepthCalculator
};
