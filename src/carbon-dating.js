const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN_2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string")
    return false;
  let ln_N0divN = Math.log(MODERN_ACTIVITY / sampleActivity);
  let k = LN_2 / HALF_LIFE_PERIOD;
  let t = Math.ceil(ln_N0divN / k);
  if(isNaN(t) || t < 0 || !isFinite(t))
    return false;
  return t;
}

module.exports = {
  dateSample
};
