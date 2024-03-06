const count = 2;

const sum = (...arr) => {
  return arr.reduce((prev, item) => prev + item);
};

sum([1, 2, 3]);
console.log('count: ', count);
