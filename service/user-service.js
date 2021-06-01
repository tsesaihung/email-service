'use strict';

const fs = require('fs');

function getAllUsers() {
    const rawdata = fs.readFileSync('../data/users.json');
    const users = JSON.parse(rawdata);
    return users;
}

function hasMatchEmail(input) {
    const users = getAllUsers();
    const results = users.filter(user => user.email == input);
    return results && results.length > 0;
}

function hasMatchEmails(input) {
    const emails = input.split(',');
    const results = [];

    if (emails && emails.length > 0) {
        for (const email of emails) {
            const result = { 'email': email, 'hasMatch': hasMatchEmail(email) };
            results.push(result);
        }
    }
    return results;
}

const results = hasMatchEmails('adamk@hotmails.com,test@hotmail.com,rsteiner@live.com');
console.log(JSON.stringify(results));
