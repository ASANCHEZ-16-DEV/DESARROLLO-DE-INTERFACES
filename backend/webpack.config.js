const path = require('path');
module.exports = {
 mode: 'production',
 entry: './index.js',
 output: {
 path: path.join(__dirname, 'server'),
 publicPath: '/',
 filename: 'server.js',
 },
 target: 'node',
};
