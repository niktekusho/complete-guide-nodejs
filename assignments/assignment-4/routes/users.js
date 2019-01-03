const express = require('express');

const users = require('./home').users;

const router = express.Router();
router.get('/users', (req, res, next) => {
	res.render('users', {
		users,
		pageTitle: 'Users',
	});
});

module.exports = router;
