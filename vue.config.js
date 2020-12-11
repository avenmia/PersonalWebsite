module.exports = {
  chainWebpack: config =>
  {
    config
      .plugin('html')
      .tap(args =>
      {
        args[0].title = "Mike's Website";
        return args;
      });
  },
  configureWebpack: process.env.NODE_ENV === 'production' ? {} : {
    devtool: 'source-map'
  },
  publicPath: '/'
};