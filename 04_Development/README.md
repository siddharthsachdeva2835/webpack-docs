## Development

Use the following instructions to set up a development environment with webpack.

Firstly, set **mode** as **development** in **webpack.config.js**:

```bash
 module.exports = {

+   mode: 'development',
    
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```

## Using source map

When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will simply point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from.

In order to make it easier to track down errors and warnings, JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

There are a lot of different options available when it comes to source maps. Be sure to check them out so you can configure them to your needs. You can find various configurations and sample code on the following links:

```bash
Configurations - https://webpack.js.org/configuration/devtool/
Sample code    - https://github.com/webpack/webpack/tree/master/examples/source-map
```

We will add **inline-source-map** as **devtool** to webpack.config.js:

```bash
module.exports = {
    mode: 'development',
    entry: {
        app:'./src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
+   devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

In this configuration, sourceMap is added as a DataUrl to the bundle. Now let's make sure we have something to debug, so let's create an error in our print.js file by replacing **console** with **cnosole**. Now open the resulting index.html file in your browser. Click the button and look in your console where the error is displayed. The error will say something like this:

```bash
Uncaught ReferenceError: cosnole is not defined
   at HTMLButtonElement.printMe (print.js:2)
```

which is mapping the error to the original **print.js** file and line number **2**.

## Using a development tool

