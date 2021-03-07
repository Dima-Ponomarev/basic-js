const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)){
      if (position <= this.chainArray.length){
        this.chainArray.splice(position - 1, 1);
      } else {
        this.chainArray = [];
        throw new RangeError('Parameter is out of range');

      }
    } else {
      this.chainArray = [];
      throw new TypeError("Wrong parameter type") 
    }
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let chainString = '';
    if (this.chainArray.length === 1){
      chainString += `( ${this.chainArray[0]} )`
    } else {
      this.chainArray.forEach((item, index) => {
        if (index === 0){
            chainString += `( ${item} )~`;
        } else if (index === this.chainArray.length - 1){
            chainString += `~( ${item} )`;
        } else {
            chainString += `~( ${item} )~`
        }
      });
    }  
   
    this.chainArray = [];
    return chainString
  }
};

module.exports = chainMaker;
