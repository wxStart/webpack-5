module.exports = function (content) {
  console.log('post normal');
  return content;
};
module.exports.pitch = function () {
  console.log('post pitch');
};

