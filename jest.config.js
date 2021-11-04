const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, './src/'),
  coveragePathIgnorePatterns: ['/node_modules/', '/example/'],
};
