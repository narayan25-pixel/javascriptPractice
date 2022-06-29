// Function_PR_1_bigggestNumber.js

var temp = 0;
var numberArray = [];
function biggestNumber(number1, number2, number3) {
  var numberArray = [number1, number2, number3];
  for (items of numberArray) {
    if (items > temp) {
      temp = items;
    }
  }
  console.log("Biggest Number is :" + temp);
}

biggestNumber(14, 9, 20);
