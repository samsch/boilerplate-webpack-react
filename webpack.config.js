/* eslint-env node */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// For production build, set this env var to the server public path.
const publicPath = process.env.APP_PUBLIC_PATH || '/';

module.exports = {
  // entry: './src/index.js', // The default entry works fine, but this can be customized.
  output: {
    // filename: 'bundle.js', // Default '[name].js'
    // path: path.resolve(__dirname, 'build'), // Default 'dist'
    // If you change path, you probably want to change the contentBase path in
    // devServer to match.
    publicPath,
  },
  devServer: {
    // host: '0.0.0.0', // Uncomment to allow connections from local network.
    contentBase: path.join(__dirname, 'dist'),
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
        test: /\.m?jsx?/,
        include: path.resolve(__dirname, 'src/'),
        use: ['babel-loader'],
      },
      {
        // For production, we output a separately cachable stylesheet.
        test: /\.css$/,
        use: [
          // Uses style-loader in development to enable hot style replacement (HMR).
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Remove or comment out the `modules` property (or set it to `false`) to disable css-modules.
          { loader: 'css-loader', options: { importLoaders: 1, modules: 'local' } },
          'postcss-loader',
        ],
      },
      {
        // Any file types which you want to add loaders for should be added to this
        // exclusion list. Otherwise the files will be turned into static links.
        exclude: [
          /\.html$/,
          /\.(m?js|jsx)$/,
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ]
};
