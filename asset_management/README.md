# Asset management

Prior to webpack, front-end developers would use tools like grunt and gulp to process assets like images, css and fonts and move them from their **/src** folder into their **/dist** directory. webpack will dynamically bundle all files together into a dependency graph.

## Loading CSS

In order to import a CSS file from within a JavaScript module, you need to install  style-loader and css-loader using the following command:

```bash
npm install --save-dev style-loader css-loader
```

Then add the style-loader and css-loader to the module configuration in **webpack.config.js**:

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

When you **import './style.css'** into the file that depends on that styling and run the command **npm run build** on that module, a <style> tag with the stringified css will be inserted into head tag of the html file.

## Loading Images

In order to import an image file from within a JavaScript module, you need to install **file-loader** using the following command:

```bash
npm install --save-dev file-loader
```

Then add the file-loader to the module configuration in **webpack.config.js**:

```bash
module: {
    rules: 
    [
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                'file-loader'
            ]
       }
    ]
}
```

Add an image to the **src** folder. Set it as source file for image tag in index.js and backround url in style.css.

When we **import MyImage from './webpack.png'**, that image will be processed and added to output directory and the **MyImage** variable will contain the final url of that image after processing.

A similar process will occur for **url('./my-image.png')** within your CSS. The loader will recognize this is a local file, and replace the **'./my-image.png'** path with the final path to the image in your output directory.

## Loading Fonts







