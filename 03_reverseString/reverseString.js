const reverseString = function (string) {
  let chars = string.split("");
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += chars[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
