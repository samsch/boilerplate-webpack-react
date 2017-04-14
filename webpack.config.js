const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    https: true,
  },
  module: {
    rules: [
      {
        test : /\.jsx?/,
        include: path.resolve(__dirname, 'src/'),
        use: ['babel-loader'],
      },
    ],
  },
};
