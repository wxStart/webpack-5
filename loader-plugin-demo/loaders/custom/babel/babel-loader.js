const schema = require('./schema.json');
const babel = require('@babel/core');

module.exports = function (content) {
  console.log('content: ', content);
  const callback = this.async();
  const options = this.getOptions(schema);
  console.log('options: ', options);

  // 使用babel对代码进行编译
  babel.transform(content, options, function (err, result) {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
