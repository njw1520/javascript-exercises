const removeFromArray = function (array, ...removeElement) {
  const newArray = [];

  array.forEach((element) => {
    if (!removeElement.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
