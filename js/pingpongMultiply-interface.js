var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#multiplynumbers').submit(function(event) {
    event.preventDefault();
    var number1 = $('#mul1').val();
    console.log(number1);
    var number2 = parseInt($('#mul2').val());
    console.log(number2);
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(number1, number2);
    console.log(output);
    $('#solution').append("<li>" + output+ "</li>");
  });
});

// $('#multiplynumbers')
