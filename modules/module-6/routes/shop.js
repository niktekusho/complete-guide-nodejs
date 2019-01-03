// Customers routes
const path = require('path');

const express = require('express');

const paths = require('../util/paths');
const adminData = require('./admin');

const router = express.Router();
router.get('/', (req, res, next) => {
	const products = adminData.products;

	// Pug
	// res.render('shop', {prods: adminData.products, path: '/', pageTitle: 'Shop'});

	res.render('shop', {
		prods: products,
		path: '/',
		pageTitle: 'Shop',
		hasProducts: products.length > 0,
		productCSS: true,
		activeShop: true,
		activeAddProduct: false
	});
});

module.exports = router;
