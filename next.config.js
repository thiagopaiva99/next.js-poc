module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/', query: { title: 'Home' } },
            '/about': { page: '/about', query: { title: 'About' } },
            '/contact': { page: '/contact', query: { title: 'Contact' } }
        }
    }
}