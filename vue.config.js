module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      clientLogLevel: 'info',
      watchOptions: {
        poll: true
      }
    }
  }
}
