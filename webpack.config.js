const path = require('path');

const config = {
    entry: './src/demo1.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};

module.exports = config;