import os from 'os';
import path from 'path';
import fs from 'fs/promises';

const storeFile = path.join(os.homedir(), 'weather-data.json');

const isFileExist = async (filePath) => {
  try {
    await fs.stat(filePath);

    return true;
  } catch (err) {
    return false;
  }
};

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isFileExist(storeFile)) {
    const file = await fs.readFile(storeFile);

    data = JSON.parse(file);
  }

  data[key] = value;

  await fs.writeFile(storeFile, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isFileExist(storeFile)) {
    const file = await fs.readFile(storeFile);
    const data = JSON.parse(file);

    return data[key];
  }
};

export default { getKeyValue, saveKeyValue };
