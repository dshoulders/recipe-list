const webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            sourceMap: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}