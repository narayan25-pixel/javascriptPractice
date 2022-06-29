// Function_PR_5_FtoCelcious.js

function fahrenheitConverter(temparature) {
  var celciousTemparature = (temparature - 32) / 1.8;
  return celciousTemparature;
}
var convertedTemparature = fahrenheitConverter(110);
console.log(convertedTemparature);
