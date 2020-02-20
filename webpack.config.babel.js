import TerserPlugin from 'terser-webpack-plugin';
import path from 'path'

const name = 'EthSignMessage';

const production = process.env.NODE_ENV === 'production';

function optimization() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  return {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  };
}

module.exports = {
  mode: production ? 'production' : 'development',
  target: 'web',
  entry: [
    './src/EthSignMessage.js'
  ],
  output: {
    path: path.join(__dirname,
      './build/com.dworznik.PawExtensions.EthSignMessage'),
    pathinfo: true,
    publicPath: '/build/',
    filename: name + '.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
      }
    ]
  },
  optimization: optimization()
};
