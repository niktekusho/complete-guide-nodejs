const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const homeRoute = require('./routes/home').routes;
const usersRoute = require('./routes/users');
const notFoundRoute = require('./routes/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(homeRoute);
app.use(usersRoute);

app.use(notFoundRoute);

app.listen(3000);
