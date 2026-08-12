const routes = require('./routes.json');

function getRoute(destination) {
    return routes[destination];
}

module.exports = {
    getRoute
};