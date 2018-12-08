const path = require('path');

function basePath() {
	if (process.mainModule) {
		return path.dirname(process.mainModule.filename);
	}
	throw new Error('missing mainModule');
}

module.exports = {
	basePath
};
