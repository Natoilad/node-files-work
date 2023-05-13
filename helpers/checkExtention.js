const checkExtention = fileName => {
  const EXTENTIONS = ['txt', 'js', 'json', 'html', 'css'];

  const arr = fileName.split('.');
  const extention = arr[arr.length - 1];

  const data = {
    extention,
    result: EXTENTIONS.includes(extention),
  };

  return data;
};

module.exports = checkExtention;

// {
//   name:
//   extention:
//   content:
// }
