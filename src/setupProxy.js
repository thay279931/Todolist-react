const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/uploads',
    createProxyMiddleware({
      target: 'http://localhost:5555',
      changeOrigin: true,
      secure: false,
    })
  )
}
