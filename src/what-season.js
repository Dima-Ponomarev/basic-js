const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date){
    if (date instanceof Date){
      try{
        date.getTime();
      } catch(error) {
        throw new TypeError('Parameter is not a Date');
      }
      const month = date.getMonth()
      if (month >= 2 && month <= 4){
        return 'spring';
      } else if (month >= 5 && month <= 7){
        return 'summer';
      } else if (month >= 8 && month <= 10){
        return 'fall';
      } else {
        return 'winter';
      }
    } else {
      throw new TypeError('Parameter is not a Date');
    }
  } else {
    return 'Unable to determine the time of year!';
  }
  
  
};
