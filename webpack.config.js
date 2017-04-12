const path = require('path');


module.exports = {
    // the entry file for the bundle
    entry: [
        'babel-polyfill',
        path.join(__dirname, '/public/js/app.jsx')
    ],

    // the bundle file we will get in the result
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'app.js',
    },

    module: {

        // apply loaders to files that meet given conditions
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/public/js'),
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ],
    },

    // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
    watch: true
};