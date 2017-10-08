var webpack  = require('webpack')
var path = require('path')

module.exports = {
    entry: path.join(__dirname,'src/js/index.js'),
    output: {
        path: path.join(__dirname,'public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]

    },
    resolve: {
        alias: {
            less: path.join(__dirname,'./src/less')
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()

    ]
}