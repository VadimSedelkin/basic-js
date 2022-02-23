const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function countProperties(object){
  let counter = 0;
  for(property in object){
    counter++;
  }
  return counter;
}

function getSeason(date) {
  let seasons = {
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
    winter: [12, 1, 2]
  };
  if(typeof date === "undefined")
    return 'Unable to determine the time of year!';
  if(!(date instanceof Date) || countProperties(date) !== 0){
    throw new Error('Invalid date!');
  }
  let dateMonth = date.getMonth() + 1;
  for(season in seasons){
    if(seasons[season].indexOf(dateMonth) !== -1)
      return season;
  }
}

module.exports = {
  getSeason
};
