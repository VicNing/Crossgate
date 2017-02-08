/**
 * Created by Neil on 2017/2/3.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'http/src/js', 'index.js'),
        vendor: ['jquery', 'bootstrap', 'react', 'react-dom',
            'redux', 'react-redux', 'react-router', 'reselect', 'redux-thunk',
            path.resolve(__dirname, 'http/src/js', 'bootstrap-select.js'),
            path.resolve(__dirname, 'http/src/js', 'get-shit-done.js')]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'server/dev/js'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    cacheDirectory: './http/cache'
                },
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: ExtractTextPlugin.extract({
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                })
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?name=[name].[ext]&publicPath=../assets/&outputPath=../assets/',
            }
        ],
    },
    devServer: {
        inline: true,
        historyApiFallback: true
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
        new ExtractTextPlugin({filename: '../css/bundle.css', disable: false, allChunks: true}),
        new HtmlWebpackPlugin({
            template: './http/src/index.html',
            filename: '../index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};
