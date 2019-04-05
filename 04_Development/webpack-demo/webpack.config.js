const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app:'./src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}