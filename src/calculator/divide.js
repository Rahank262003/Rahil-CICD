/**
 * Division
 */

function divide(firstNum, secondNum) {
    if(secondNum == 0){
        throw new Error("Division Not Possible");
    }
    return firstNum / secondNum;
  }
  
  module.exports = divide
  