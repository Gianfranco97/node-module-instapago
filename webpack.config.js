var path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'InstapagoNode.js',
        library: 'InstapagoNode',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0']
                }
            }
        ]
    },
    externals: [
        'url',
        'https'
    ],
    plugins: [
        new UglifyJsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
}
