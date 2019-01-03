const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

// const handlebars = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundRoute = require('./routes/404');

const paths = require('./util/paths');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(paths.basePath(), 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(notFoundRoute);

app.listen(3000);
