const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
	console.log('users route');
	res.send('<html><head><title>Users</title></head><body><h1>Users page</h1></body>');
});

app.use('/', (req, res, next) => {
	console.log('all the other routes');
	res.send('<html><head><title>Home</title></head><body><h1>Home page</h1></body>');
});

app.listen(3000);
