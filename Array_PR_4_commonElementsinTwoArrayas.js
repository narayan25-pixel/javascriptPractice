// Array_PR_4_commonElementsinTwoArrayas.js

var arr1 = ["SAM", "VIKRAM", "VENUS"];
var arr2 = ["WATSON", "RAM", "SAM"];
arr1.forEach(commonItems);

function commonItems(item) {
  for (items of arr2) {
    if (item == items) {
      console.log(item);
    }
  }
}
