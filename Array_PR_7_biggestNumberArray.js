// Array_PR_7_biggestNumberArray.js

var array = [1, 2, 10, 3, 4, 5, 6];
var temp = 0;
for (item of array) {
  if (item > temp) {
    temp = item;
  }
}
console.log("Biggest number is :" + temp);
