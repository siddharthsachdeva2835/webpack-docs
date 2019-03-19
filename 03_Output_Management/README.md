# Output Management

So far we've manually included all our assets in our index.html file, but as your application grows and once you start outputting multiple bundles, it will be difficult to keep managing your index.html file manually. However, a few plugins exist that will make this process much easier to manage.

Declare a **printMe** function inside **print.js** and import it into **index.js** to print **'I get called from print.js!'** on the console when a button is clicked.

Add the following scripts to **index.html** file:

```bash
<!doctype html>
  <html>
    <head>

      <title>Output Management</title>
+     <script src="./print.bundle.js"></script>
    </head>
    <body>
+     <script src="./app.bundle.js"></script>
    </body>
  </html>
```

and add the configurations to the **webpack.config.js** file:

```bash
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
  };
```

When we run **npm run build**, We can see that webpack generates our print.bundle.js and app.bundle.js files, which we also specified in our index.html file. if we open index.html in your browser, we can see that **'I get called from print.js!'** is logged to the console when you click the button.

But what would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build, but our index.html file would still reference the old names. we can fix this with the HtmlWebpackPlugin.

## HtmlWebpackPlugin

Run the following command to install the plugin:

```bash
npm install --save-dev html-webpack-plugin
```

Add plugin configuration to **webpack.config.js** file:

```bash
plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
```

**HtmlWebpackPlugin** by default will generate its own index.html file, even though we already have one in the dist/ folder. This means that it will replace our index.html file with a newly generated one.

## Cleaning up the /dist folder

Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project.  it's good practice to clean the /dist folder before each build, so that only used files will be generated. This can be achieved using another plugin called **clean-webpack-plugin**. Run the following command:

```bash
npm install --save-dev clean-webpack-plugin
```

and add the configuration to the **webpack.config.js** file:

```bash
plugins: [
    new CleanWebpackPlugin(),
]
```




