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
        filename: 'bundle.min.js'
    },
    
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        root: [path.join(__dirname, "src/libs")]
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=templates/[name]-[hash:6].html'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {   test: /\.ts$/, 
                loader: 'ts-loader' 
            },
            {
                test: /\.css$/,     
                loader: 'style-loader!css-loader' 
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {   
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: 'src/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};