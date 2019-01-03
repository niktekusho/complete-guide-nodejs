const path = require('path');

const express = require('express');

const paths = require('../util/paths');

const router = express.Router();

router.use('/', (req, res, next) => {
	res.render('404', {pageTitle: 'Page not found'});
});

module.exports = router;
