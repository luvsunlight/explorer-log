const path = require("path")

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./examples/index.js",
	output: {
		path: path.resolve(__dirname, "examples/"),
		filename: "index.min.js"
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	}
}
