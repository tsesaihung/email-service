'use strict';

const fs = require('fs');

module.exports = {

    getAllUsers: function () {
        const rawdata = fs.readFileSync('./users.json');
        const users = JSON.parse(rawdata);
        return users;
    },

    hasMatchEmail: function (input) {
        const users = this.getAllUsers();
        const results = users.filter(user => user.email == input);
        return results && results.length > 0;
    },

    hasMatchEmails: function (input) {
        const emails = input.split(',');
        let results = [];
        const matchedEmails = [];
        const nonMatchedEmails = [];

        if (emails && emails.length > 0) {
            for (const email of emails) {

                if (this.hasMatchEmail(email)) {
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
}

