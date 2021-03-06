const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
	res.render('add-product', {
	  pageTitle: 'Add Product',
	  path: '/admin/add-product',
	  formsCSS: true,
	  productCSS: true,
	  activeAddProduct: true
	});
}

exports.postNewProduct = (req, res, next) => {
	new Product(req.body.title).save();
	res.redirect('/');
}

exports.getProductsPage = (req, res, next) => {
	Product.fetchAll(products => {
		res.render('shop', {
		  prods: products,
		  pageTitle: 'Shop',
		  path: '/',
		  hasProducts: products.length > 0,
		  activeShop: true,
		  productCSS: true
		});
	});
}
