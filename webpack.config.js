const HTMLWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: ['babel-loader', 'eslint-loader']
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HTMLWebPackPlugin(
            {
                template: "./src/index.html",
                filename: "./index.html"
            }
        )
    ], devServer: {
        port: 5200
    }
};
