const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ){
  if (typeof sampleActivity === 'string'){
    const sampleNum = Number(sampleActivity)
    if(!isNaN(sampleNum) && sampleNum > 0 && sampleNum < MODERN_ACTIVITY){
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleNum) * HALF_LIFE_PERIOD / Math.log(2))
    } else {
      return false;
    }
  } else {
    return false;
  }
  
}
