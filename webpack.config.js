const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { node } = require("webpack");
const { env } = require("process");


module.exports = {
    entry: {
        "butler": "/src/index.js",
    },
    output: {

        path: path.resolve(__dirname, "public"),
        library: "ButlerWidget",
        libraryTarget: "umd",
        umdNamedDefine: true,
        filename: "[name].js"
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            attributes: {
                crossorigin: 'anonymous'
            }
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/,
                uglifyOptions:
                {
                    minimize: true,
                    mangle: false,
                    compress: {
                    }
                }

            })
        ]
    }
};