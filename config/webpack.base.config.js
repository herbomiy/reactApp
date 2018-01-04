const path = require("path")
const webpack = require("webpack")
const config = require("./config")
const publicPath = config.publicPath;
module.exports = function (env) {

	//svg
	const svgSpriteDirs = [
		require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
	];

	return {
		entry: {
			main: path.resolve(__dirname, "../src/main.js"),
		},
		output: {
			path: path.resolve(__dirname, "../dist"),
			sourceMapFilename: "[name].map",
			filename: "[name].js",
			chunkFilename: '[name].js',
			publicPath
		},
		resolve: {
			extensions: ['.web.js', ".ts", ".js", ".jsx",".json"],
			modules: [path.join(__dirname, "../src"), "node_modules"],
			alias: {
				'actions': path.join(__dirname, "../src/redux/actions"),
				'component': path.join(__dirname, "../src/component"),
				'page': path.join(__dirname, "../src/page"),
				'reducer': path.join(__dirname, "../src/redux/reducers"),
				'router': path.join(__dirname, "../src/router"),
				'store': path.join(__dirname, "../src/redux/store"),
				'assets': path.join(__dirname, "../src/assets"),
				'utils': path.join(__dirname, "../src/utils"),
			}
		},
		module: {
			loaders: [
				{
					test: /\.(js|jsx)?$/,
					use: ['babel-loader?cacheDirectory=true'],
					exclude: "/node_modules/"
				},
				{
					test: /\.svg$/,
					loader: 'svg-sprite-loader',
					include: svgSpriteDirs,
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: ['url-loader?limit=2000&name=static/img/[name].[hash:5].[ext]'],
					exclude: "/node_modules/"
				},
				// {
				// 	test: /\.css$/,
				// 	loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
				// 	exclude: /node_modules/
				// },
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
					exclude: "/node_modules/"
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader',
					exclude: "/node_modules/"
				}

				// {
				// 	test: /\.css$/,
				// 	loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
				// 	exclude: /node_modules/
				// },
				// {
				// 	test: /\.css$/,
				// 	use: ["style-loader", "css-loader?modules", "postcss-loader", "sass-loader"],
				// },
				// {
				// 	test: /\.scss$/,
				// 	use: ["style-loader", "css-loader?modules", "sass-loader"],
				// 	exclude: ["/node_modules/", path.resolve(__dirname, "../static")]
				// },
				// {
				// 	test: /\.scss$/,
				// 	use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
				// 	include: [path.resolve(__dirname, "../static")]
				// },
			],
		},
	}
}