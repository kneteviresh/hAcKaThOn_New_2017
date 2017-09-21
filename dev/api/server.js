let app = require('./app');
let port = process.env.PORT || 4000;

let server = app.listen(port, function () {
    console.log('server listening at ' + port);
});

module.exports = server;