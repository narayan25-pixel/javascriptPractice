// Array_PR_5_uniqueItemsin2Arrays.js

var arr1 = ["SAM", "VIKRAM", "VENUS"];
var arr2 = ["WATSON", "RAM", "SAM"];
var arr3 = arr1.concat(arr2);
var newArray = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] != arr3[i + 1]) {
    newArray.push(arr3[i]);
  }
}
console.log(newArray);
