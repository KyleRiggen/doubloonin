// import my own files: ('./file') for relative path or ('/file') for an absolute path 

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('in 2 the middleware')
    res.send('<h1>hello from express</h1>');
});

app.listen(3000);

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://nodejs.org/en/docs/guides/debugging-getting-started