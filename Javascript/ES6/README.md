# ECMAScript6 `ES6`

JavaScript was lacking behind some other programming languages when compared to various syntactic forms such as declaring constant variables, declaring block scoped variables, extracting data from arrays, shorter syntax for declaring functions and so on. ES6 adds up a lot of new syntax-based features to JavaScript, which helps the developers to write less and do more. ES6 also prevents programmers from using various hacks for achieving various goals, which have negative performance impact and made code harder to read.

1. [New Keywords](01_New_Keywords)
    1. [The let keyword](01_New_Keywords/01_let)
    2. [The const keyword](01_New_Keywords/02_const)
2. [Extended Parameter Handling](02_Parameter_Handling)
    1. [Default Parameter Values](02_Parameter_Handling/01_Default_Paramter)
    2. [Rest Parameter](02_Parameter_Handling/02_Rest_Parameter)
    3. [Spread Operator](02_Parameter_Handling/03_Spread_Operator)
3. [Destructuring Assignment](03_Destructuring_Assignment)
    1. [The Array Destructuring Assignment](03_Destructuring_Assignment/01_Array)
    2. [The Object Destructuring Assignment](03_Destructuring_Assignment/02_Object)
4. [Enhanced Object Literals](04_Enhanced_Object)
5. [Arrow Functions](05_Arrow_Functions)
6. [Symbols](06_Symbols)
7. [Iterators](07_Iterators)
    1. [The iteration protocols](07_Iterators/01_iteration_protocols)
    2. [The `for…of` loop](07_Iterators/02_for_of_loop)
8. [Generators](08_Generators)

## Prerequisites

Inorder to run ES6 code we need to use babel loader to convert the es6 code to the normal javascript code which can understand by all the browsers. To do that transpiling we will use webpack as build tool and babel-loader as the transpiler.

### Webpack`v3.6.0`

We need to follow the below steps to setup the ES6 transpiler.

First we need to install webpack v3.6.0
```
    npm install webpack@3.6.0 --save-dev
```

After the installation we need to create a file with name `webpack.config.js`, this file will have all the build settings required for our project. Then add the below code to the file
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
If you observe the above code, we are creating an object and then assinging to the module.exports. In that object the `entry` variable is assinged the source path which needs transpiling or building. Then in the `output` object the *filename* will have the name of the output file after transpiled. And then the *path* will the path where we want the transpiled file to be placed.

In order to run webpack with npm, we need to add the `build` to the scripts variable present in the package.json
```
    "scripts": {
        "build": "webpack"
    }
```
Then run the webpack build by using the below simple command:
```
    npm run build
```
### babel-loader

This package allows transpiling JavaScript files.

Install babel-loader as npm package
```
    npm install babel-loader babel-core babel-preset-env --save-dev
```

And do the below settings in `webpack.config.js` file
```
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
```
Here the *test* will be assigned with the file extensions which needs to be transpiled in regex format. *exclude* will have the path or folder name which needs to be excluded from transpiling. In `use` we will say which loader we are using and presets options we will use for transpiling the files.

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

You can check the transpiled code in dist/bundle.js file.
