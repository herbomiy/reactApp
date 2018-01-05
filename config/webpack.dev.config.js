const path = require("path");
const webpack = require("webpack")
const webpackMerge = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");
const precss = require("precss");

// const pxtorem = require('postcss-pxtorem')

const baseConfig = require("./webpack.base.config.js");
const config = require("./config");
const port = config.port;

module.exports = function (env) {
	console.log(`
#################################################
  Server is listening at: http://localhost:${config.port} 
#################################################
	`);
	return webpackMerge(baseConfig(env), {
		entry: [
			"react-hot-loader/patch",
			"webpack-dev-server/client?http://localhost:" + port,
			"webpack/hot/only-dev-server",
			path.resolve(__dirname, "../src/main.js"),
		],
		devtool: "cheap-module-source-map",
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new OpenBrowserPlugin({url: "http://localhost:" + port}),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: path.join(__dirname, '../src/index.html'),
				hash: true,
				inject: true
			}),
			new webpack.LoaderOptionsPlugin({
				options: {
					postcss: function () {
						return [precss, autoprefixer];
					},
					devServer: {
						historyApiFallback: true, //不跳转
						inline: true //实时刷新
					}
				}
			})
		],
		// devServer: {
		// 	hot: true,
		// 	historyApiFallback: true,
		// 	port: config.port,
		// 	host: '0.0.0.0',
		// 	disableHostCheck: true
		// }
	})
}