const basePage = require('./utils');

function buildForm() {
    return `
    <form action="/create-user" method="POST">
        <input type="text" name="username">
        <button type="submit">Send</button>
    </form>
    `;
}

module.exports = basePage('Assignment', buildForm());
