const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./public/dist")
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react","env"]
                    }
                }
            }
        ]
    },
    devServer: {
      contentBase: "./public/",
      watchContentBase: true
    }
}
