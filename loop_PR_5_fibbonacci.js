var firstNumber = 1;
var secondNumber = 1;
var thirdNumber = 0;
for (let i = 0; i < 20; i++) {
  firstNumber = secondNumber;
  secondNumber = thirdNumber;
  thirdNumber = firstNumber + secondNumber;
  console.log(thirdNumber);
}
