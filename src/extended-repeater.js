const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = "";
  let localOptions = {
    repeatTimes: (typeof options.repeatTimes !== "undefined") ? options.repeatTimes : 1,
    separator: (typeof options.separator !== "undefined") ? options.separator : '+',
    addition: (typeof options.addition !== "undefined") ? options.addition : '',
    additionRepeatTimes: (typeof options.additionRepeatTimes !== "undefined") ? options.additionRepeatTimes : 1,
    additionSeparator: (typeof options.additionSeparator !== "undefined") ? options.additionSeparator : '|',
  };
  
  for(let i = 0; i < localOptions.repeatTimes; i++){
    if(i !== 0)
      newStr += "" + localOptions.separator + str;
    else
      newStr += str;
    for(let j = 0; j < localOptions.additionRepeatTimes; j++){
      if(j === 0)
        newStr += "" + localOptions.addition;
      else
        newStr += "" + localOptions.additionSeparator + localOptions.addition;
    }
  }
  return newStr;
}

module.exports = {
  repeater
};
