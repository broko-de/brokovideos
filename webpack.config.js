const path = require('path');
const HtmlWebPackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            //Regla para configurar babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //Regla para configurar archivos HTML
            {
                test: /\.html\$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            //Regla para loader de css
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            //Regla para tratar archivos multimedia
            {
                test: /\.(png|gif|jpg)$/,
                use:[
                    {
                        'loader': 'file-loader',
                        options:{
                            name: 'assets/[hash].[ext]' //guardo los archivos dentro de la carpeta assets en produccion
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
};
