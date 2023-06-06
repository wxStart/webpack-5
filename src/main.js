const count = 2;
console.log("count: ", count);
const ab = () => {
  const a = [...[1, 2, 4]];
  console.log("a: ", a);
  const obj = {
    foo: {
      bar: {
        baz() {
          return 42;
        },
      },
    },
  };

  const baz = obj?.foo?.bar?.baz(); // 42
  console.log('baz: ', baz);
};
ab();
// var a = 12;
