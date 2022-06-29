// Function_PR_4_Palindrome.js
var temp;
function palindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] != string[len - 1 - i]) {
      temp = 1;
      break;
    }
  }
  if (temp == 1) {
    return false;
  } else {
    return true;
  }
}
var result = palindrome("madam");
console.log(result);
