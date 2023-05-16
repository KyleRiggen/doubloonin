// import my own files: ('./file') for relative path or ('/file') for an absolute path 
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
});

app.listen(3000);

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// https://nodejs.org/en/docs/guides/debugging-getting-started