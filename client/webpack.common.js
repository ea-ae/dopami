const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


const staticFilenames = ['404', 'about'];
const staticPages = staticFilenames.map(name => {
    return new HtmlWebpackPlugin({
      template: `src/static/${name}.html`,
      filename: `${name}.html`,
      chunks: ['static']
    })
});


module.exports = {
    entry: {
        index: './src/index/index.tsx',
        app: './src/app/app.tsx',
        static: './src/static/static.tsx'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
        }),]
        .concat(staticPages),
    module: { rules: [
        {
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
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
    ]},
    
};
