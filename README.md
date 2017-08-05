# Boilerplate for Webpack with React and Modern Javascript

## Features

- Webpack v3
- Babel loader (JSX for React, ES latest using env preset, dynamic import support)
- Sass (as the `.scss` file type) and css import loaders, extracted to a new file.
- eslint (recommended default from v4 with minor changes, and babel parser for non-standard support.)

## Running this project

You need a current version of Node.js installed (this was originally tested and built with 7.7.1).

Clone the project, and run `npm install` to install the dependencies. (This project does not include the package-lock.json, to encourage using the latest versions. Please file an issue if a dependency is out of date.)

Run the development server with `npm start`. This will open the test page in your browser, and rebuild then refresh the page on source changes.

You can also run the Webpack development build and source watcher with `npm run dev`, which will only recompile. (You might do this to use an external server).

You can make a production build of the bundle with `npm run build`.

## Make it your own

`src/main.js` and `src/App.js` contain a basic example app. Replace these with your own app.
