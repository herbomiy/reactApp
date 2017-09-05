const path = require("path")
const webpack = require("webpack")
const config = require("./config");
const publicPath = config.publicPath;

module.exports = function (env) {
	console.log('__dirname = ', __dirname)
	
	return {
		entry: {
			main: path.resolve(__dirname, "../src/main.js"),
		},
		output: {
			path: path.resolve(__dirname, "../dist"),
			sourceMapFilename: "[name].map",
			filename: (env === "dev") ? "[name].js" : "[name].[hash:16].js",
			chunkFilename: '[name].[chunkhash:5].chunk.js',
			publicPath
		},
		resolve: {
			extensions: [".ts", ".js", ".jsx",".json"],
			modules: [path.join(__dirname, "../src"), "node_modules"],
			alias: {
				'actions': path.join(__dirname, "../src/actions"),
				'component': path.join(__dirname, "../src/component"),
				'reducer': path.join(__dirname, "../src/reducer"),
				'router': path.join(__dirname, "../src/router"),
				'store': path.join(__dirname, "../src/store"),
				'utils': path.join(__dirname, "../src/utils"),
			}
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					use: ["babel-loader"],
					exclude: "/node_modules/"
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: ["url-loader?limit=20000&name=images/[hash:16].[ext]"],
					exclude: "/node_modules/"
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader?modules", "postcss-loader", "sass-loader"],
					exclude: ["/node_modules/", path.resolve(__dirname, "../static")]
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
					include: [path.resolve(__dirname, "../static")]
				},
			],
		},
	}
}