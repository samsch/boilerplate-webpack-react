/* eslint-env node */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// For production build, set this env var to the server public path.
const publicPath = process.env.APP_PUBLIC_PATH || '/';

module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath,
  },
  devServer: {
    // host: '0.0.0.0', // Uncomment to allow connections from local network.
    contentBase: path.join(__dirname, 'build'),
    https: true,
    historyApiFallback: true, // Default to expecting React Router.
    // Setup a proxy:
    // proxy: {
    //   // All requests which start with `/api`.
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src/'),
        use: ['babel-loader'],
      },
      {
        // For production, we output a separately cachable stylesheet.
        test: /\.s?css$/,
        use: (() => {
          const styleRules = [
            // Uncomment the `modules: true` property to enable css-modules. Also do that for production below ↓
            { loader: 'css-loader', options: { importLoaders: 2 /* , modules: true */ } },
            'postcss-loader', // Used for autoprefixer
            'sass-loader',
          ];
          if (process.env.NODE_ENV === 'production') {
            // Use ExtractTextPlugin for production so styles are put in a separate, cacheable file.
            return ExtractTextPlugin.extract({ use: styleRules});
          }
          // Use style-loader in development to enable hot style replacement.
          return ['style-loader', ...styleRules];
        })(),
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.scss$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // "url" loader works just like "file" loader but it also embeds
      // assets smaller than specified size as data URLs to avoid requests.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin([{
      from: 'public'
    }], {
      ignore: ['index.html'],
    }),
  ].concat(
    process.env.NODE_ENV === 'production'
      ? [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          new UglifyJsPlugin(),
        ]
      : []
  ),
};
