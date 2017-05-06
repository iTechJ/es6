const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "arrow": "./scripts/arrows.js",
        "classes": "./scripts/classes.js",
        "defaults": "./scripts/defaults.js",
        "destructuring": "./scripts/destructuring.js",
        "interpolation": "./scripts/interpolation.js",
        "iterators": "./scripts/for-of.js",
        "scoping": "./scripts/scoping.js",
        "maps": "./scripts/maps.js",
        "modules": "./scripts/modules.js",
        "module-loaders": "./scripts/module-loaders.js",
        "literals": "./scripts/object-literals.js",
        "promises": "./scripts/promises.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
