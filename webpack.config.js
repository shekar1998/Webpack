const path = require('path');

module.exports = {
  entry: './public/type.ts',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'public')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // watch: true,
  mode: 'development',
};
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.ts',
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   watch: true,
//   mode: 'development',
//   // @ts-ignore
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   // @ts-ignore
//   watch: true,
//   plugins: [HtmlWebpackPlugin, { template: './src/index.html' }],
// };
// const path = require( 'path' );

// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );

// module.exports = {

//     // bundling mode

//     mode: 'production',

//     // entry files

//     entry: './src/index.ts',

//     // output bundles (location)

//     output: {

//         path: path.resolve( __dirname, 'dist' ),

//         filename: 'main.js',

//     },

//     // file resolutions

//     resolve: {

//         extensions: [ '.ts', '.js' ],

//     },

//     // loaders

//     module: {

//         rules: [

//             {

//                 test: /\.tsx?/,

//                 use: 'ts-loader',

//                 exclude: /node_modules/,

//             }

//         ]

//     },

//     plugins: [

//                 new ForkTsCheckerWebpackPlugin(), // run TSC on a separate thread

//                 new HtmlWebpackPlugin({

//                     template: "./src/index.html"

//                 })

//             ],

//     module: {

//         rules: [

//             {

//                 test: /\.css$/,

//                 use: ["style-loader", "css-loader"]

//             }

//         ],

//     },

//     watch: true

// }
