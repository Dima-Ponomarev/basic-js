const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let catsCount = 0;
  for (arr of matrix){
    for (element of arr){
      if (element === '^^'){
        catsCount++;
      }
    }
  }
  return catsCount;
};
