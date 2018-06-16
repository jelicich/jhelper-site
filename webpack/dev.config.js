const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, "src"),
        publicPath: "/src",
        filename: "webpack-bundle-index.js"
    },

    mode: 'development',

    devtool: 'eval-source-map',

    devServer: {
        // inline: true,
        contentBase: path.resolve(__dirname, '../src'),
        port: 3001
    },

    plugins: []
})