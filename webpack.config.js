const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
      home: './index',
      styles: './styles.scss'
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'built'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'eval',

    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        port: 3000

    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: ["transform-react-jsx"],
                    presets: ['env']
                }
            }
        },
        {
            test: /\.(ttf|eot|svg|woff|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader",
            options: {
                name: '[path][name].[ext]?[hash]'
            }
        }]
    },

    watch: true,

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};