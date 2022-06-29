var userString = "madam";
var temp;
const len = userString.length;
for (let i = 0; i < len / 2; i++) {
  if (userString[i] != userString[len - 1 - i]) {
    temp = 1;
    break;
  }
}
if (temp == 1) {
  console.log("String is not a Palindrome");
} else {
  console.log("String is a Palindrome");
}
