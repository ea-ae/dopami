const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'devdist'),
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        hot: true,
        static: { directory: path.join(__dirname, 'public/favicons') },
        client: {
            progress: true,
        },
        // compress: true,
        // historyApiFallback: true,
        // contentBase: './',
        port: 9001,
        watchFiles: {paths: ['./src/**/*']},
    },
});
