const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.info(arr);
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformedArray = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next'){
      i++;
    }
    else if(arr[i] === '--discard-prev'){
      if(transformedArray[transformedArray.length-1] === arr[i-1] && i > 0)
        transformedArray.pop();
    }
    else if(arr[i] === '--double-next'){
      if(i < arr.length-1)
        transformedArray.push(arr[i+1]);
    }
    else if(arr[i] === '--double-prev'){
      if(transformedArray[transformedArray.length-1] === arr[i-1] && i > 0)
        transformedArray.push(arr[i-1]);
    }
    else if(typeof arr[i] !== "undefined"){
      transformedArray.push(arr[i]);
    }
  }
  return transformedArray;
}

module.exports = {
  transform
};
