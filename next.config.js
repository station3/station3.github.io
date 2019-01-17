const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')
const { ANALYZE } = process.env

module.exports = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html'
    }
  },
  useFileSystemPublicRoutes: false, // 파일시스템 라우팅 사용여부
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    if (ANALYZE) {
      config.plugins.push(
        new WebpackBundleSizeAnalyzerPlugin('stats.txt')
      )
    }

    return config
  }
}
