const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env


module.exports = {
    webpack: function (config) {
        if (ANALYZE) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true
            }))
        }

        return config
    },
    exportPathMap: function () {
        return {
            '/': { page: '/', query: { title: 'Home' } },
            '/about': { page: '/about', query: { title: 'About' } },
            '/contact': { page: '/contact', query: { title: 'Contact' } }
        }
    }
}