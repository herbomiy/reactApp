const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const HTMLWebpackPlugin = require("html-webpack-plugin");
// old
// const autoprefixer = require("autoprefixer");
// const precss = require("precss");

// new
const pxtorem = require('postcss-pxtorem');

const baseConfig = require("./webpack.base.config.js");
const config = require("./config.js");
const vendor = config.vendor;

//svg
const svgSpriteDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
];

module.exports = function(env) {
	return webpackMerge(baseConfig(env), {
		entry:{
			main:path.resolve(__dirname,"../src/main.js"),
			vendor,
		},
		module: {
			loaders: [
        // {
					// test:/\.jsx?$/,
					// use:["babel-loader"],
					// exclude:"/node_modules/"
        // },
        // {
					// test: /\.(png|jpg|gif)$/,
					// use: ["url-loader?limit=20000&name=[name].[hash:5].[ext]"],
					// exclude: "/node_modules/"
        // },
        // {
	       //  test: /\.svg$/,
	       //  loader: 'svg-sprite-loader',
	       //  include: svgSpriteDirs,
        // },
	      // {
				// 	test: /\.s?css$/,
				// 	use: ExtractTextPlugin.extract({
				// 			fallback: "style-loader",
				// 			use: [
				// 				"css-loader?minimize&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]",
				// 		    "sass-loader"
				// 			]
				// 		 }),
				// 	exclude: ["/node_modules/", path.resolve(__dirname,"../static")]
				// }
				// {
		     //  test: /\.s?css$/,
		     //  use: ExtractTextPlugin.extract({
			   //    fallback: "style-loader",
			   //    use: [
				//       "css-loader?minimize",
				//       "sass-loader"
			   //    ]
		     //  }),
		     //  exclude: "/node_modules/",
		     //  include: [path.resolve(__dirname,"../src/assets/css")]
				// },
      ],
		},
		plugins:[
			new webpack.optimize.UglifyJsPlugin({
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
        		name: ["vendor", "manifest"]
    		}),
    		new webpack.DefinePlugin({
				"process.env": { 
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.LoaderOptionsPlugin({
				options:{
					postcss() {
						return pxtorem({
							rootValue: 100,
							propWhiteList: [],
						})
					},
					sassLoader: {
            sourceMap: true
          },
				}
			})
		]
	})
}