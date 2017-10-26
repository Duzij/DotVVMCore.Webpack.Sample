"use strict";

const path = require('path');
const webpack = require('webpack');
const globentry = require('webpack-glob-entry');

module.exports = {
    entry: globentry(__dirname + '/Resources/*.***'),
    output: {
        path: __dirname + '/wwwroot/dist/',
        publicPath: "/dist/",
        filename: "[name].js",
    },
    module: {
        rules: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' }
        ]
    },
    plugins:
    [
        //two global variables for jQuery - restart Node.JS needed
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        //Avoiding dublicate code 
        new webpack.optimize.CommonsChunkPlugin("shared"),
    ],
};


