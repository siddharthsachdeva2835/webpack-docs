# Asset management

Prior to webpack, front-end developers would use tools like grunt and gulp to process assets like images, css and fonts and move them from their **/src** folder into their **/dist** directory. webpack will dynamically bundle all files together into a dependency graph.

## Loading CSS

In order to import a CSS file from within a JavaScript module, you need to install  style-loader and css-loader using the following command:

```bash
npm install --save-dev style-loader css-loader
```

Them add the style-loader and css-loader to the module configuration in **webpack.config.js**:

```bash
module: {
    rules: 
    [
        {
            test: /\.css$/,
           use: [
           'style-loader',
           'css-loader'
           ]
       }
    ]
}
```

Now, add a new style.css file to the project and import it in index.js to change the color of **hello world** text.

When you **import './style.css'** into the file that depends on that styling and run the command **npm run build** on that module, a <style> tag with the stringified css will be inserted into the <head> of the html file.

## Loading Images





