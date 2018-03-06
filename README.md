# Boilerplate for Webpack with React and Modern Javascript

## Features

- Webpack v3
- Babel loader (JSX for React, ES latest using env preset, dynamic import support)
- Sass (as the `.scss` file type) and css import loaders, extracted to a new file.
- eslint (Primarly non-style rules, but required semi-colons, singleQuotes for strings, and 'es5' comma list mode (and a couple others); using babel parser for non-standard support.)
- jest (configured to handle style and file imports, import and dynamic import syntax.)
- Static assets in `/public` are copied to the build folder (with special handling for index.html to inject the bundle entry files).

## What about...

- [CSS Modules](https://webpack.js.org/loaders/css-loader/#modules)
  - Enabled by uncommenting `/* , modules: true */` in `webpack.config.js`.
- Flow/Typescript
  - Follow the respective instructions for adding these to a Webpack config/project. Assuming babel is doing the syntax conversion for these, eslint should work properly. Jest may need some extra work. (untested) (See loader note below)
- Less
  - Replace sass-loader with less-loader and any packages less-loader needs. (See loader note below)
- Anything else
  - Projects which are frequently used with Webpack often have instructions for how to integrate them. Extra babel plugins can just be directly added to .babelrc, and extra Webpack loaders can be added to webpack.config.js. (See loader note below)

### Loader note

If you add or change a Webpack loader, make sure that any newly handled file extensions are added to the file-loader exclude list. Inversly, if you remove a loader, you may want to also remove the extension from the exclude list.

## Running this project

You need a current version of Node.js installed (currently testing and building with 9.3.0, but latest LTS should be fine (and probably Node v6 as well)).

Clone the project, and run `npm install` to install the dependencies. (This project does not include the package-lock.json, to encourage using the latest versions. Please file an issue if a dependency is out of date.)

Run the development server with `npm start`. This will open the test page in your browser, and rebuild then refresh the page on source changes.

You can also run the Webpack development build and source watcher with `npm run dev`, which will only recompile. (You might do this to use an external server).

You can make a production build of the bundle with `npm run build`.

## Make it your own

`src/main.js` and `src/App.js` contain a basic example app. Replace these with your own app.
