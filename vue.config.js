module.exports = {
  publicPath: '',
  devServer: {
    allowedHosts: 'all',
  },
  configureWebpack: {
    module: {
      exprContextCritical: false,
    },
  },
}
