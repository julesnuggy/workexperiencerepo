function fizzbuzz(max) {
  var output = [];
  var i;
  for (i=1; i<=max; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      output.push("fizzbuzz");
    } else if (i % 3 === 0) {
      output.push("fizz");
    } else if (i % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(i);
    }
  }

  return output;
}

function calculate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return number1+number2;
      break;
    case "-":
      return number1-number2
      break;
    case "*":
      return number1*number2;
      break;
    case "/":
      return number1/number2;
      break;
    default:
      return "ERROR";
      break;
  }
}