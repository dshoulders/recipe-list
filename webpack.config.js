module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
    },
    devtool: 'eval',
    devServer: {
        historyApiFallback: true
    },
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