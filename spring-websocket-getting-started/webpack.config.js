const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: './src/main/frontend/app.js',
    output: {
        filename: 'js/bundle.js',
        path: __dirname + '/build/resources/main/static'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml'},
            {test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff'},
            {test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff'},
            {test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff'},
            {test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff'}
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    {
                        source: __dirname + '/build/resources/main/static/js/bundle.js',
                        destination: __dirname + '/out/production/resources/static/js/bundle.js'
                    },
                    {
                        source: __dirname + '/build/resources/main/static/css/styles.css',
                        destination: __dirname + '/out/production/resources/static/css/styles.css'
                    }
                ]
            }
        })
    ]
}
;