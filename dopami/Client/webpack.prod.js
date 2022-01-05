const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //path: path.resolve(__dirname, '..', 'wwwroot'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 35000, // 35kb
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ]
});
