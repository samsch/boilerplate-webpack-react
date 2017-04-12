# Basic Webpack (just bundling, no loaders)

>This is a sister repository to my [Getting Started with Webpack](https://samuelscheiderich.com/2017/04/11/getting-started-with-webpack/) article.

This is an example or boilerplate for using Webpack. The core functionality is here, which is to take ES module or CommonJS module source files and "bundle" them into a single distributable js file to be used in website/webapp.

Webpack at it's core is pretty simple and can be run completely from the command line. However, it's usually convienent to keep a `webpack.config.js` file which holds the actual Webpack project configuration.

Also included is a basic webpack-dev-server configuration, which acts as a static file server, and serves the compiled bundle. In addition, it adds code to the bundle so that it can automatically refresh the page when changes are made to the source. An added bonus is that the dev server keeps the bundle and source in memory, and can rebuild faster than the normal Webpack tool.

## Running this project

You need a current version of Node.js installed (this was originally tested and built with 7.7.1).

Clone the project, and run `npm install` to install the dependencies.

Run the development server with `npm start`. This will open the test page in your browser, and rebuild then refresh the page on source changes.

You can also run the Webpack development build and source watcher with `npm run dev`, which will only recompile. (You might do this to use an external server).

You can make a production build of the bundle with `npm run build`.

## Make it your own

You can build a project from this by replacing `src/main.js` with your entrypoint code, and removing `src/foo.js`. The entrypoint filename is configurable as well, and doesn't have to be "main.js". You can also configure your source folder or even build from the root. This is all controlled by the `entry` property in `webpack.config.js`.

Webpack-dev-server can be setup to proxy request from another server instead of serving static files. This can be used with any backend server (e.g., Node.js, PHP, Go). For more info on how to do this, check out the [devServer proxy docs](https://webpack.js.org/configuration/dev-server/#devserver-proxy).
