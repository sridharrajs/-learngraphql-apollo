const assertEnvironment = (dotEnv) => {
  if (dotEnv.error) {
    return Promise.reject('Please create .env using .env.sample template');
  }

  for (const key of ['PORT', 'MONGO_CONNECTION_URL']) {
    if (!process.env[key]) {
      return Promise.reject(`${key} is not set!!`);
    }
  }
  return Promise.resolve();
};

module.exports = { assertEnvironment };
