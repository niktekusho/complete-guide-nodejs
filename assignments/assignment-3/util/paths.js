const path = require('path');

const basePath = path.dirname(process.mainModule.filename);

function resolveFromBasePath(...segments) {
	return path.join(basePath, ...segments);
}

module.exports = {
	basePath,
	resolveFromBasePath
};
