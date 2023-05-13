const http = require('http');
// import my own files: ('./file') for relative path or ('/file') for an absolute path 

const routes = require('./routes');

// use "routes" for incoming requests
const server = http.createServer(routes);

// listening on port 3000
server.listen(3000);

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://nodejs.org/en/docs/guides/debugging-getting-started