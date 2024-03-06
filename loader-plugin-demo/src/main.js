import './index.css';

const count = 2;

const sum = (arr) => {
  return arr.reduce((prev, item) => prev + item, 0);
};

const res = sum([1, 2, 3]);
console.log('res: ', res);
console.log('count: ', count);
