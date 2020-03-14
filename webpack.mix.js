let publicWebpackPath = `public/assets/`;
let publicJsPath = `${publicWebpackPath}js/`;
let publicCssPath = `${publicWebpackPath}css/`;
let publicAssetsPath = `${publicWebpackPath}`;

let sourcePath = `resources/`;
let sourceJsPath = `${sourcePath}js/app.js`;
let sourceCssPath = `${sourcePath}sass/app.scss`;
let sourceAssetsPath = `${sourcePath}assets`;

const mix = require('laravel-mix');

require('dotenv').config();

mix.setPublicPath(publicWebpackPath);

mix.options({
    processCssUrls: false
});

mix.browserSync({
   proxy: process.env.APP_URL.replace('http://', '').replace('https://',''),
   files: [
       `${publicWebpackPath}**/*`,
       'app/**/*',
       'resources/lang/**/*',
       'resources/views/**/*',
       'routes/**/*'
   ],
    socket: {
       domain: '127.0.0.1:3000'
    }
}, {reload: true});

mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: false,
                    cache: false,
                }
            },
            {
                test: /\.(js)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: mix.config.babel()
                }]
            }
        ]
    },
    output: {
        publicPath: 'assets/',
        chunkFilename: '[name].js'
    }
});

mix.react(sourceJsPath, publicJsPath)
   .sass(sourceCssPath, publicCssPath)
    .extract([
        'lodash',
        'react',
        'react-dom',
        'prop-types',
        'redux',
        'redux-logger',
        'redux-promise-middleware',
        'redux-thunk',
        'axios'
    ], `${publicJsPath}vendor.js`);

// mix.copy(sourceAssetsPath, publicAssetsPath)
