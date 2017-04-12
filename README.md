# Basic Webpack (just bundling, no loaders)

This is an example or boilerplate for using Webpack. The core functionality is here, which is to take ES module or CommonJS module source files and "bundle" them into a single distributable js file to be used in website/webapp.

Webpack at it's core is pretty simple and can be run completely from the command line. However, it's usually convienent to keep a `webpack.config.js` file which holds the actual Webpack project configuration. Most Webpack projects use more options than just the basics, and controlling everything from the command line can get ugly.

## Running this project

You need a current version of Node.js installed (this was originally tested and built with 7.7.1).

Clone the project, and run `npm install` to install the dependencies.

Run the development script (which watches for file changes and rebuilds) with `npm run dev`.

You can make a production build of the bundle with `npm run build`.

## Make it your own

You can build a project from this by replacing `src/main.js` with your entrypoint code, and removing `src/foo.js`. The entrypoint filename is configurable as well, and doesn't have to be "main.js". You can also configure your source folder or even build from the root. This is all controlled by the `entry` property in `webpack.config.js`.
