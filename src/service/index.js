const { start } = require('../model/index');

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];

  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

const callRegisters = async () => {
  const result = await start();
  const response = quicksort(result);
  return response;
};

module.exports = {
  callRegisters,
};
