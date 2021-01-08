const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const outputDirectory = "bundle";

const config = {
    entry: path.resolve(__dirname, "src", "client", "index.js"),
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, outputDirectory)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:4000"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/client/index.html"
        })
    ]
}

module.exports = config;