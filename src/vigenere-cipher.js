const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect){
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabet = this.alphabet.split("");
    this.mode = (isDirect === true || typeof isDirect === "undefined") ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined")
      throw new Error('Incorrect arguments!');
    let keyLength = key.length;
    let currentKeyLetter = 0;
    let encryptedMessage = "";
    let encryptLetterPosition;
    for(let i = 0; i < message.length; i++){
      if(this.alphabet.indexOf(message[i].toUpperCase()) === -1){
        encryptedMessage += message[i];
        continue;
      } 
      encryptLetterPosition = (this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.indexOf(key[currentKeyLetter++ % keyLength].toUpperCase())) % this.alphabet.length;
      encryptedMessage += this.alphabet[encryptLetterPosition];
    }
    return (this.mode === "reverse") ? encryptedMessage.split("").reverse().join("") : encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage === "undefined" || typeof key === "undefined")
      throw new Error('Incorrect arguments!');
    let keyLength = key.length;
    let currentKeyLetter = 0;
    let decryptedMessage = "";
    let decryptLetterPosition;
    for(let i = 0; i < encryptedMessage.length; i++){
      if(this.alphabet.indexOf(encryptedMessage[i].toUpperCase()) === -1){
        decryptedMessage += encryptedMessage[i];
        continue;
      } 
      decryptLetterPosition = (this.alphabet.indexOf(encryptedMessage[i].toUpperCase()) - this.alphabet.indexOf(key[currentKeyLetter++ % keyLength].toUpperCase())) % this.alphabet.length;
      if(decryptLetterPosition < 0)
        decryptedMessage += this.alphabet[this.alphabet.length+decryptLetterPosition];
      else
        decryptedMessage += this.alphabet[decryptLetterPosition];
    }
    return (this.mode === "reverse") ? decryptedMessage.split("").reverse().join("") : decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
