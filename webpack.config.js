var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        './src/main.js'
    ],
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        root: __dirname + '/src'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                // Only run js and jsx files through babel
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // SASS
            {
              test: /\.scss$/,
              loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }
        ]
    },
    stats: {
        colors: true,
        progress: true
    },
    debug: true
};