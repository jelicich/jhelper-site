const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
    mode: 'production',

    entry: {
        index: './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-bundle-[name].js',
    },

    devServer: {
        inline: true,
        contentBase: 'src',
        port: 3001
    },

    plugins: [
        // Minify JS
        new UglifyJsPlugin({
            extractComments: true,
            uglifyOptions: {
                compress: true
            },
            sourceMap: false
        })
    ]
})