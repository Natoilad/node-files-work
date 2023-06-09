const argv = require('yargs').argv;

const { createFile, getFiles, getFile } = require('./files');

function invokeAction({ action, fileName, content }) {
  switch (action) {
    case 'create':
      createFile(fileName, content);
      break;

    case 'get':
      getFiles();
      break;

    case 'read':
      getFile(fileName);
      break;

    case '':
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
