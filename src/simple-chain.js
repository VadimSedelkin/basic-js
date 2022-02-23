const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("" + value);
    return this;
  },
  removeLink( position ) {
    if(position < 1 || position > this.getLength() || !Number.isInteger(position)){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let stringChain = "";
    for(let i = 0; i < this.getLength(); i++){
      if(i === 0)
        stringChain += `( ${this.chain[i]} )`;
      else
        stringChain += `~~( ${this.chain[i]} )`;
    }
    this.chain = [];
    return stringChain;
  }
};

module.exports = {
  chainMaker
};
