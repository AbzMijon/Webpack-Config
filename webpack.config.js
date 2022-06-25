const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //??

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {index: '/'},
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
    }
}