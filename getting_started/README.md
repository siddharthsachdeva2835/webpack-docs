# Getting started

## Prerequisites

* NodeJS
* NPM

## Setup

Initializing a basic project with webpack:

```bash
mkdir webpack-demo 
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

## Folder structure

```bash
webpack-demo
|- package.json
|- /dist
    |- index.html
|- /src
    |- index.js
```

## Bundling

Run the following command to bundle the file to main.js:

```bash
npx webpack
```

This will take the script at src/index.js as an entry point, and will generate dist/main.js as the output.
Now open dist/index.html in the browser to check if the code is running properly.







