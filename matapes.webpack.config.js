const path = require('path');

const filepaths = {
  DIST:path.resolve('/app/dist/build/'),
  JS: path.resolve(__dirname, 'app/src/js/'),
  publicPath :path.resolve('/public/')
};

const filenames = {
	DIST:'matapes-bundle.js',
	ENTRY: 'intro.js'
};

module.exports = {
  entry: path.resolve(filepaths.JS, filenames.ENTRY),
  output: {
    filename: filenames.DIST,
    path: filepaths.DIST,
    publicPath: filepaths.publicPath
  },
  devtool: 'inline-source-map',
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
         ]
      },
    {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
   },
   {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
      }
  ]
}
};