const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index/index.tsx',
        app: './src/app/app.tsx',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },],
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test:/\.css$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/prismjs'),
                    path.resolve(__dirname, 'node_modules/prism-themes'),
                ],
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: false } // this fixes a weird bug
                    },
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index/index.html',
            filename: 'index.html',
            chunks: ['index'],
            favicon: 'public/favicons/favicon.ico',
        }),
        new HtmlWebpackPlugin({
            template: 'src/app/app.html',
            filename: 'app.html',
            chunks: ['app'],
            favicon: 'public/favicons/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 35000, // 35kb
        },
    },
    devServer: {
        hot: true,
        client: {
            progress: true,
        },
        // compress: true,
        // historyApiFallback: true,
        // contentBase: './',
        port: 9001,
        watchFiles: {paths: ['./src/**/*']},
    },
};
