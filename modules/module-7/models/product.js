const fs = require('fs');
const path = require('path');
const utilPath = require('../util/path');

const p = path.join(utilPath, 'data', 'products.json');

const getProductsFromFile = cb => {
	fs.readFile(p, (error, data) => {
		if (error) {
			return cb([]);
		}
		cb(JSON.parse(data));
	});
}

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		getProductsFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (error) => {
				if (error) {
					console.error(error);
				}
			});
		});
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
}
