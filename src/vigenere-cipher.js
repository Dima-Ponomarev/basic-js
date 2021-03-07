const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect = true){
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (arguments.length !== 2){
      throw new Error("wrong~")
    }
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const upperKey = key.toUpperCase();
    const upperMessage = message.toUpperCase();
    let encryptedMessage = '';
    let keyLetterIndex = 0;

    for (let letterIndex = 0; letterIndex < upperMessage.length; letterIndex++){
      if (!alphabet.includes(upperMessage[letterIndex])){
        encryptedMessage += upperMessage[letterIndex];
        continue;
      }
      const positionOfEncryptedLetter = alphabet.indexOf(upperMessage[letterIndex]) + alphabet.indexOf(upperKey[keyLetterIndex]);
      encryptedMessage += alphabet[positionOfEncryptedLetter % alphabet.length];
      
      keyLetterIndex++;
      if (keyLetterIndex === upperKey.length){
          keyLetterIndex = 0;
      } 
    }
    if (this.isDirect){
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
      
  }    
  decrypt(encryptedMessage, key) {
    if (arguments.length !== 2){
      throw new Error("wrong~")
    }

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const upperKey = key.toUpperCase();
    const upperEncryptedMessage = encryptedMessage.toUpperCase();
    let message = '';
    let keyLetterIndex = 0;

    for(let letterIndex = 0; letterIndex < upperEncryptedMessage.length; letterIndex++){
      if (!alphabet.includes(upperEncryptedMessage[letterIndex])){
        message += upperEncryptedMessage[letterIndex];
        continue;
      }
      const keyLetterPosition = alphabet.indexOf(upperKey[keyLetterIndex]);
      const encryptedLetterPosition = alphabet.indexOf(upperEncryptedMessage[letterIndex])
      if (keyLetterPosition > encryptedLetterPosition){
          message += alphabet[encryptedLetterPosition + 26 - keyLetterPosition]
      } else {
          message += alphabet[encryptedLetterPosition - keyLetterPosition] 
      }
      keyLetterIndex++;
      if (keyLetterIndex === upperKey.length){
          keyLetterIndex = 0;
      } 
  }
  if (this.isDirect){
    return message;
  } else {
    return message.split('').reverse().join('');
  }

  }
}

module.exports = VigenereCipheringMachine;
