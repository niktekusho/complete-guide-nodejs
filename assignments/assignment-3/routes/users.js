// Users route
const express = require('express');

const paths = require('../util/paths');

const router = express.Router();
router.get('/', (req, res, next) => {
	res.sendFile(paths.resolveFromBasePath('views', 'users.html'));
});

module.exports = router;
