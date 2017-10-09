function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(number1, number2) {
  var output = number1 + number2;
  return output;
}

Calculator.prototype.subtract = function(number1, number2) {
  var output = number1 - number2;
  return output;
}

Calculator.prototype.multiply = function(number1, number2) {
  var output = number1 * number2;
  return output;
}

Calculator.prototype.divide = function(number1, number2) {
  var output = number1 / number2;
  return output;
}

exports.calculatorModule = Calculator;
