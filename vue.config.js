module.exports = {
  configureWebpack: process.env.NODE_ENV === 'production' ? {} : {
    devtool: 'source-map'
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/PersonalWebsite/' : '/'
};