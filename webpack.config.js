//以project内文件夹名字如果在project根文件夹则为空否则填写形式如下'/FoldName'
const currentfold='/newsmoudle';

const webpack = require("webpack");
const path = require('path');


/* plugin */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const CleanPlugin = require("clean-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');




/* isDev */
const env = process.env.NODE_ENV || 'dev';

const isDev = (env==="dev");



/* setting Path */

const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname,'project'+currentfold);
const outPath =path.resolve(__dirname,(!isDev?'./'+env+currentfold:'./dist'+currentfold));
const nodeModules = path.resolve(__dirname,'node_modules');
const srcPlugins = srcPath+'/libary/plugins';
const outPlugins = outPath+'/libary/plugins';


// console.log(outPath),
/* module exports */
const config = {

    context: srcPath,
    ////entry setting 用法：entry: string|Array<string>
    entry: './index.js',

    ////output setting 编译文件的文件名(filename)，首选推荐：// main.js // bundle.js || index.js
    //output.path 对应一个绝对路径，此路径是你希望一次性打包的目录
    output: {
        filename: isDev?'[name].[hash].bundle.js':'[name].bundle.js',
        path: outPath,
        // publicPath:rootPath,
        chunkFilename:isDev?'[name]-[id].js':'[id].js',
        publicPath: '/'
    },



    ////devtool setting
    devtool: isDev?"cheap-module-eval-source-map":"nosources-source-map",

    // What information should be printed to the console
    stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        },

    ////devServer setting
    devServer: {
        contentBase:outPath,
        // publicPath: '',
        historyApiFallback: false,
        hot: true,
        open: false,
        inline: true,
        port: 8888
    },

    ////module setting
    module: {
        rules: [
            // {
            //     test: require.resolve('jquery'),
            //     use: [{
            //         loader: 'expose-loader',
            //         options: '$'
            //     }]
            // },
            {
                test: /\.js$/,
                include: srcPath,
                loader: ['babel-loader'],
                exclude: [nodeModules,srcPlugins]
            },
            {
                // Vendor and lib css
                test: /\.s?[ac]ss$/,
                include: [
                    path.resolve(__dirname,'node_modules'),
                    './project/libary/com/css'
                ],
                // exclude: [
                //  srcPath
                // ],
                use: ExtractTextPlugin.extract({

                    //fallback {String}/ {Array}/{Object}'style-loader'当CSS未被提取时应该使用的加载器（例如）（即，在附加的块中allChunks: false）
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap:isDev?true:false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap:isDev?true:false
                            }
                        }
                    ]
                })
            },

            // root    {String}    /   解析URL的路径，以开头的URL /不会被翻译
            // url {Boolean}   true    启用/禁用url()处理
            // alias   {Object}    {}  创建别名更容易导入某些模块
            // import  {Boolean}   true    启用/禁用@import处理
            // modules {Boolean}   false   启用/禁用CSS模块
            // minimize    {Boolean|Object}    false   启用/禁用分解
            // sourceMap   {Boolean}   false   启用/禁用源地图
            // camelCase   {Boolean|String}    false   导出CamelCase中的类名
            // importLoaders   {Number}    0   CSS加载程序之前应用的加载程序数
            {
                test: /\.s?[ac]ss$/,
                include: [
                    srcPath,
                ],
                exclude: [
                    path.resolve(__dirname,'node_modules'),
                    './project/libary/com/css'
                ],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: isDev?true:false,
                            // modules: true,
                            // localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev?true:false,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev?true:false,
                            includePath: encodeURIComponent(srcPath),
                            outputStyle: isDev?'expanded':'compressed',
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm)(\?.*)?$/,
                include: [srcPath, nodeModules],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'libary/media/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|otf)(\?.*)?$/i,
                include: [srcPath, nodeModules],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5120,
                            name: 'libary/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)(\?.*)?$/i,
                include: [srcPath, nodeModules],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5120,
                            name: isDev?'libary/imges/[name].[hash:8].[ext]':'libary/imges/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },


    plugins: [
        new DashboardPlugin(),
        //这个插件的作用是在热加载时直接返回更新文件名，而不是文件的id。
        new webpack.NamedModulesPlugin(),

        // 在webpack 2中使用NoErrorsPlugin会有警告提示
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            // Copy glob results, relative to context
            {
                context: srcPlugins,
                from: '**/*',
                to: outPlugins
            }

        ]),

        new HtmlWebpackPlugin(
            {
                // true
                // 默认值，script标签位于html文件的 body 底部
                //
                // body
                // 同 true
                //
                // head
                // script 标签位于 head 标签内
                //
                // false
                // 不插入生成的 js 文件，只是单纯的生成一个 html 文件
                inject: 'body',
                template: './index.html',
                chunksSortMode: 'dependency'
            }
        ),

        // 在前端页面中判断运行环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        //提取代码中的公共模块，然后将公共模块打包到一个独立的文件中，以便在其他的入口和模块中使用
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: isDev?'vendor-[hash].js':'vendor.js',
        }),

        new ExtractTextPlugin({
            filename: isDev?'styles.[hash:5].css':'styles.css',
            allChunks: true,
            disable: false
        }),





    ]

}
if(isDev){
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        //AssetsPlugin来创建一个查询表，来存储资源和hash后的名称
        new AssetsPlugin({
          path: outPath,
          filename: 'assets.json',
          prettyPrint: true,
        })

    )
}else{
    config.plugins.push(

        new webpack.optimize.UglifyJsPlugin({
                compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new CleanPlugin([outPath])

    );
};
module.exports = config;