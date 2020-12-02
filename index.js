'use strict';

const chalk = require('chalk');
const dotEnv = require('dotenv').config();

const { assertEnvironment } = require('./bin/utils');
const { connectDb } = require('./src/db');
const server = require('./bin/server');

assertEnvironment(dotEnv).then(() => {
  return connectDb();
}).then(() => {
  return server.start();
}).catch(reason => {
  console.trace(chalk.red(reason));
  process.exit(0);
});
