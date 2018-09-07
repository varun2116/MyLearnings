```
    npm init

    npm install webpack@3.6.0 webpack-dev-server --save-dev

    npm install babel-core babel-loader@7.1.5 babel-preset-env babel-preset-react --save

    npm install react react-dom react-redux redux prop-types --save
```

```
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
```

```
    npm run start:dev
```
