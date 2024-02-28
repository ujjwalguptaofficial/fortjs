if (process.env.NODE_ENV === 'production') {
    module.exports = require('./fort.prod.js');
}
else {
    module.exports = require('./fort.js');
}
