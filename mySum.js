const mySum = (...numbers) => {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

module.exports = mySum;
