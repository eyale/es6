const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglify-js-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
})
