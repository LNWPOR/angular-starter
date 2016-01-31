var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
            'webpack/hot/dev-server',
            path.resolve(__dirname, 'src/app/app.js')
        ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=templates/[name]-[hash:6].html'
            },
            {
                test: /\.js?$/,
                loader: 'babel'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {   test: /\.ts$/, 
                loader: 'ts' 
            },
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file?name=images/[name]-[hash:6].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: 'src/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })
    ]
};