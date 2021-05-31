'use strict';

const fs = require('fs');

function getAllUsers() {
    const rawdata = fs.readFileSync('../data/users.json');
    const users = JSON.parse(rawdata);
    return users;
}

function hasMatch(email) {
    console.log('search email: ' + email)
    const users = getAllUsers();
    const results = users.filter (user => user.email == email);

    if (results && results.length > 0) {
        console.log ('Match Found: ' + JSON.stringify(results));
        return true;
    } else {
        console.log ('No match for: ' + email);
        return false;
    }
}

hasMatch('adamk@hotmails.com');
