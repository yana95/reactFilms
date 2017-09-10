const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),

    entry: {
        shop: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http::/localhost:3000',
            './index.jsx',
        ]
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ],
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
    ],
};