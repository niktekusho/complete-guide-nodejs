// Creation of products
const path = require('path');

const express = require('express');

const paths = require('../util/paths');

const products = [];

const router = express.Router();
// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
	//  Pug
	// res.render('add-product', {pageTitle: 'Add Product', path: 'add-product'});

	res.render('add-product', {
		pageTitle: 'Add Product',
		path: 'add-product',
		productCSS: true,
		formsCSS: true,
		activeShop: false,
		activeAddProduct: true
	});
});

// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
	products.push({
		title: req.body.product
	});
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
