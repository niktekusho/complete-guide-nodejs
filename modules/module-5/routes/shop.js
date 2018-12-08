// Customers routes
const path = require('path');

const express = require('express');

const paths = require('../util/paths');

const router = express.Router();
router.get('/', (req, res, next) => {
	res.sendFile(path.join(paths.basePath(), 'views', 'shop.html'));
});

module.exports = router;
