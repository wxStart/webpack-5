const loaderUtils = require('loader-utils');

module.exports = function (content) {
  // 1。根据文件内容生成哈希文件名

  const filename = `images/${loaderUtils.interpolateName(this, '[hash].[ext][query]', {
    content,
  })}`;

  console.log('filename: ', filename);
  // 2. 输出图片
  this.emitFile(filename, content);

  // 3. 返回  module.exports = "文字名字"

  return `module.exports = "${filename}"`;
};

// 图片  字体文件是二进制数据
module.exports.raw = true;
