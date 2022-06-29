// Function_PR_3_sumOfanArray.js

var numbers = [1, 2, 3, 4];
var total = 0;

function sum(numberArray) {
  for (items of numberArray) {
    total = total + items;
  }
  console.log(total);
}
sum(numbers);
