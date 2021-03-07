const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {

  if (!options.repeatTimes){
      options.repeatTimes = 1;
  }
  if (!options.separator){
      options.separator = '+';
  }
  if (typeof options.addition === "undefined"){
      options.addition = '';
  }
  if (!options.additionRepeatTimes){
      options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator){
      options.additionSeparator = '|';
  }

  if (typeof str !== "string"){
    if (str === null){
      defaultStr = "null"
    } else {
      defaultStr = str.toString()
    }
    
  } else {
      defaultStr = str;
  }
  if (typeof options.addition !== "string"){
    
    if (options.addition === null){
      options.addition = 'null';
    } else {
      options.addition = options.addition.toString();
    }
    
  }
  let resultString = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i !== 0){
      resultString += options.separator;
    }
    resultString += defaultStr;
    for (let j = 0; j < options.additionRepeatTimes; j++){
      if (j !== 0){
        resultString += options.additionSeparator;
      }
      resultString += options.addition;
    }
  }
  return resultString;  
} 