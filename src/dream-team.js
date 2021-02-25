const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (Array.isArray(members)){
    let teamArr = [];
    members.forEach(member => {
      if (typeof member === 'string'){
        for (let i = 0; i < member.length; i++){
          if (member[i] !== ' '){
            teamArr.push(member[i].toUpperCase());
            break;
          }
        }
      }
    });
    return teamArr.sort().join('');
  } else {
    return false;
  }
};
