module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/template.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
  };
  