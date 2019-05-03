const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist')
    },

    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        port: 3000,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.(css|less)$/,
                exclude: ["/node_modules"],
                use: [
                    { loader: 'raw-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                resolve: {
                    extensions: ['', '.ts', '.tsx']
                }
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.js'),
                to: path.resolve(__dirname, 'dist/vendors'),
                flatten: true,
            }
        ]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}