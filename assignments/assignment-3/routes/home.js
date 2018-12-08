// Home route
const express = require('express');

const paths = require('../util/paths');

const router = express.Router();
router.get('/', (req, res, next) => {
	res.sendFile(paths.resolveFromBasePath('views', 'home.html'));
});

module.exports = router;
