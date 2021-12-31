const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                            plugins: [
                                ['prismjs', {
                                    'languages': ['all'],
                                    'plugins': ['autoloader'],
                                    'theme': 'tomorrow', // prism-tomorrow, try twilight later + custom themes
                                    'css': true,
                                }],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test:/\.css$/,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/prismjs')],
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: false } // this fixes a weird bug
                    },
                    'css-loader',
                    'postcss-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        hot: true,
        client: {
            progress: true,
        },
        // compress: true,
        port: 9001,
        watchFiles: {paths: ['./src/**/*']},
    },
};
