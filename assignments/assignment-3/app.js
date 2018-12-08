const express = require('express');

const usersRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');
const notFoundRoute = require('./routes/404');

const paths = require('./util/paths');

const app = express();

app.use(express.static(paths.resolveFromBasePath('public')));

app.use('/users', usersRoutes);
app.use(homeRoutes);

app.use(notFoundRoute);

const port = 3000;

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
