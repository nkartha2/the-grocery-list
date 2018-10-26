const webpack = require('webpack');
var path = require('path')

const config = {
    entry: __dirname + '/js/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        // publicPath: '/pu blic'
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.tsx', '.ts', ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ]
    }
};

module.exports = config;