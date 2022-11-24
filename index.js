#!/usr/bin/env node
import { getArgs } from './helpers/index.js';
import { loggerService } from './services/index.js';

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    loggerService.printHelp();
  }
};

initCLI();
