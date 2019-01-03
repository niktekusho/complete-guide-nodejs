const express = require('express');

const users = [];

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('home', {
		pageTitle: 'Home',
		path: '/',
	});
});

router.post('/add-user', (req, res, next) => {
	users.push({
		name: req.body.user
	});
	res.redirect('/');
});

exports.routes = router;
exports.users = users;
