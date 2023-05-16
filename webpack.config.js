const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
   new BundleAnalyzerPlugin(),
  ],
  // externals: [
  //   /react-icons\/.*/,
  // ],
};