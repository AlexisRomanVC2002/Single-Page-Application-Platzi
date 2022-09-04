const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ruleToJavascript = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    },
};


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module:{
        rules:[ruleToJavascript]
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }),

        new CopyWebpackPlugin({
            patterns: [
                {from: './src/styles/style.css', to: '' }
            ]
        })
    ],
};