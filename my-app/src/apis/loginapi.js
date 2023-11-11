function loginUser(username, password) {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    })
        .then(response => response.text())
        .catch((error) => {
            console.error('Error:', error);
        });
}

module.exports = loginUser;