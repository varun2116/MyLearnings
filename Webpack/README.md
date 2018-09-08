# Webpack

## Installing Webpack

```
    npm install webpack@3.6.0 --save-dev

```

create a conf file for Webpack `webpack.config.js`


```
    const path = require("path");

    module.exports = {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.join(__dirname, "dist")
        }
    }
```

Run webpack by below command, then bundle.js file will be created in dist folder
```
    node_modules\.bin\webpack
```
In order to run webpack easily, add the below change in package.json

```
    "scripts": {
        "build": "webpack"
    },
```

Then run the webpack build by using the below simple command:
```
    npm run build
```

## Watch

In order to reflect the changes we do on index.js to bundle.js, we need to do the below changes in package.json in `scripts` object as
```
    "watch": "webpack --w"
```

Then run the below command to watch the changes
```
    npm run watch
```

## Loaders

### babel-loader

Install babel-loader as below
```
    npm install babel-loader babel-core babel-preset-env --save-dev
```

And do the below settings in webpack.config.js
```
    const path = require("path");

    module.exports = {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.join(__dirname, "dist")
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    }
                }
            ]
        }
    }
```

Create `.babelrc` file in the project folder and add the below code
```
    {
        "presets": ["env"]
    }
```

Then run the build command
```
    npm run build
```
