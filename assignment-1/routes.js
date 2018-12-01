const homePage = require('./home');
const usersPage = require('./users');

module.exports = (req, res) => {
    // Use object destructuring to access method and url properties
    const {method, url} = req;

    // Set the common header Content-Type header
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(homePage);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
		// TODO parse req
		const body = [];
		req.on('data', chunk => body.push(chunk));
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const username = parsedBody.split('=')[1];
			console.log(username);
			res.setHeader('Location', '/');
			res.statusCode = 302;
			return res.end();
		});
    }

    if (url === '/users' || url === '/users/') {
        res.write(usersPage);
        res.end();
    }
};
