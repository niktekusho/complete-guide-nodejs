const {writeFile} = require('fs');

module.exports = (req, res) => {
    const {url, method} = req;
    // console.log(method, url);
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<div><h1>Write your message below!</h1></div>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => body.push(chunk));
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            writeFile(`./${Date.now()}.txt`, message, err => {
                if (err) {
                    res.statusCode = '500';
                    res.write('Error writing to file');
                    return res.end(); 
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.write('<html>');
    res.write('<body><h1>Hi!</h1></body>');
    res.write('</html>');
};
