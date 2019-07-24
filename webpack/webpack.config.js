const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "../"
                })
            }, {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 300,
                        outputPath: "image/"
                    }
                }]
            }, {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/main.css"),
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        host: "localhost",
        compress: true,
        port: "8081"
    }
}