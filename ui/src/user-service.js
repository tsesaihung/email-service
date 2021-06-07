'use strict';

// const e = require('express');
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

export function hasMatchEmails(user) {
    const emails = user.input.split(',');
    let results = [];
    const matchedEmails = [];
    const nonMatchedEmails = [];

    if (emails && emails.length > 0) {
        for (const email of emails) {

            if (hasMatchEmail(email)) {
                matchedEmails.push({ 'email': email, 'hasMatch': true });
            } else {
                nonMatchedEmails.push({ 'email': email, 'hasMatch': false });
            }
        }

        // combine the search results
        matchedEmails.sort((a, b) => a.email.localeCompare(b.email));
        nonMatchedEmails.sort((a, b) => a.email.localeCompare(b.email));
        results = [...matchedEmails, ...nonMatchedEmails];
    }

    return results;
}

const results = hasMatchEmails('adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com');
console.log(JSON.stringify(results));
