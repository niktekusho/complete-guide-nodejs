const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

const port = process.env.ASSIGNMENT_PORT || 3000;

server.listen(port, () => {
    console.log(`Running on port ${port}`);
});
