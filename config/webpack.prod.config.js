const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const HTMLWebpackPlugin = require("html-webpack-plugin");
// old
const autoprefixer = require("autoprefixer");
const precss = require("precss");

// new
const pxtorem = require('postcss-pxtorem');

const baseConfig = require("./webpack.base.config.js");
const config = require("./config.js");
const vendor = config.vendor;


module.exports = function(env) {
	return webpackMerge(baseConfig(env), {
		entry:{
			main:path.resolve(__dirname,"../src/main.js"),
			vendor,
		},
		output: {
			filename: "static/js/[name].[chunkhash:5].js",
			chunkFilename: 'static/js/[name].[chunkhash:5].js',
		},
		module: {
			loaders: [
				// { // less 编译
				// 	test: /\.less$/,
				// 	loader: 'style-loader!css-loader?modules&localIdentName=[name]-[local]-[hash:10]!postcss-loader!less-loader',
				// 	exclude: /node_modules/
				// },
				// {
				// 	test: /\.scss$/,
				// 	loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:10]!postcss-loader!sass-loader',
				// 	exclude: /node_modules/
				// }
			]
		},
		plugins:[
			new webpack.HashedModuleIdsPlugin(), // 优化缓存 - vendor
			new webpack.optimize.UglifyJsPlugin({ // 代码压缩
				compress: {
					warnings: false,
					screw_ie8: true,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
				},
				output: {
					comments: false,
				},
			}),
			new ExtractTextPlugin({
				filename:"css/style.[contenthash:5].css",
				disable:false,
				allChunks:true,
			}),
			new HTMLWebpackPlugin({
				filename: process.env.NODE_ENV === 'dev' // 执行编译后文件路径
					? 'index.html'
					: 'index.html',
				template:"src/index.html"
			}),
			new webpack.optimize.CommonsChunkPlugin({
        		name: ['vendor', 'manifest', 'runtime']
    		}),
    		new webpack.DefinePlugin({
				"process.env": { 
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.LoaderOptionsPlugin({
				options: {
					postcss: function () {
						return [precss, autoprefixer]; // precss,
					}
				}
			})
		]
	})
}