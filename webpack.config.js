const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: './custom-userbox.js',
    output: {
        filename: 'plugin-custom-userbox.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [ 'vue-style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        filename: 'plugin-custom-userbox.js',
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};