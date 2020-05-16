module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/quotes-app/'
      : '/'
  }