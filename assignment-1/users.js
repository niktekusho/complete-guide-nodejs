const basePage = require('./utils');

// IIFE: execute the anonymous function right on the export
/**
 * Users list
 */
module.exports = (() => {
    let bodyContent = '<h1>Users</h1>';
    let users = '<ul>';
    for (let i = 1; i <= 3; i++) {
        users = users.concat(buildUserElement(`User ${i}`));
    }
    users = users.concat('</ul>');
    bodyContent = bodyContent.concat(users);
    return basePage('Assignment', bodyContent);
})();

/**
 * Utility function that builds a single <li> element
 * @param {string} username
 */
function buildUserElement(username) {
    return `<li>${username}</li>`;
}
