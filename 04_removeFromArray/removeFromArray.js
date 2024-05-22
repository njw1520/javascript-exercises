const removeFromArray = function (array, ...removeElement) {
  let newArray = array.splice(removeElement - 1, 1);

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
