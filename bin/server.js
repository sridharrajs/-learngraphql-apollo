const http = require('http');

const { app } = require('../src');
const { PORT } = process.env;

const start = () => new Promise((resolve, reject) => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/graphql`);
    resolve();
  });
  server.on('error', () => reject());
});

module.exports = { start };
