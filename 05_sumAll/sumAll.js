const sumAll = function (lowerLimit, upperLimit) {
  let finalSum = 0;

  if (lowerLimit < 0 || upperLimit < 0) {
    return "ERROR";
  } else if (typeof lowerLimit === "number" && typeof upperLimit === "number") {
    if (upperLimit < lowerLimit) {
      for (let i = upperLimit; i <= lowerLimit; i++) {
        finalSum += i;
      }
    } else {
      for (let i = lowerLimit; i <= upperLimit; i++) {
        finalSum += i;
      }
    }
    return finalSum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
