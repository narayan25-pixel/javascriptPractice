var userInput = 10;
var sum = 0;
for (let i = userInput; i < userInput + 40; i++) {
  if (i % 2 != 0) {
    sum = sum + i;
  }
}
console.log(sum);
