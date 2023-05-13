const fs = require('fs/promises');

const path = require('path');

const chalk = require('chalk');

const dataValidator = require('./helpers/dataValidator');
const checkExtention = require('./helpers/checkExtention');

const createFile = async (fileName, content) => {
  const data = {
    fileName,
    content,
  };

  const results = dataValidator(data);

  if (results.error) {
    console.log(
      chalk.red(`Please specify ${results.error.details[0].path} parameter`)
    );
    return;
  }
  const { extention, result } = checkExtention(fileName);
  if (!result) {
    console.log(
      chalk.red(`sorry aplication dosent suport ${extention} extention `)
    );
    return;
  }

  try {
    await fs.writeFile(
      path.join(__dirname, 'files', fileName),
      content,
      'utf-8'
    );
    console.log(chalk.blue(`create file succesfull `));
  } catch (error) {
    console.log(error);
  }
};
const getFiles = async () => {
  try {
    const filelist = await fs.readdir(path.join(__dirname, 'files'));
    if (filelist.length === 0) {
      console.log(chalk.red('no files in this directory'));
    }
    console.log(chalk.green(filelist));
  } catch (error) {
    console.log(error);
  }
};
const getFile = async name => {
  try {
    const filelist = await fs.readdir(path.join(__dirname, 'files'));
    const result = filelist.includes(name);
    if (!result) {
      console.log(chalk.red(`no file whith name: ${name}`));
    }
    const file = await fs.readFile(
      path.join(__dirname, 'files', name),
      'utf-8'
    );
    const ext = await checkExtention(name).extention;
    console.log({
      name: name,
      extention: ext,
      content: file,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createFile,
  getFiles,
  getFile,
};

// path path.basename
// path.extname
