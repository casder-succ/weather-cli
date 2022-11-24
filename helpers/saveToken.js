import { loggerService, storageService } from '../services/index.js';

export default async (token) => {
  try {
    await storageService.saveKeyValue('token', token);

    loggerService.printSuccess(`token (${token}) saved`);
  } catch (err) {
    loggerService.printError(err);
  }
};
