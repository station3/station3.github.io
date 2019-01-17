const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()


routes.add('home', '/', 'home')
routes.add('service', '/service', 'service')
routes.add('culture', '/culture', 'culture')
