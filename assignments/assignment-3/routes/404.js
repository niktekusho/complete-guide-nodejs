const express = require('express');

const paths = require('../util/paths');

const router = express.Router();

router.use('/', (req, res, next) => {
	res.status(404).sendFile(paths.resolveFromBasePath('views', '404.html'));
});

module.exports = router;
