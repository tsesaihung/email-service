const assert = require('assert');

const expect    = require("chai").expect;
const userService = require("../user-service");

describe('Test user service', () => {
    it('should matched for first email', () => {
        const firstEmail = 'adamk@hotmail.com';
        const secondEmail = 'test@gmail.com';

        const results = userService.hasMatchEmails(firstEmail + ',' + secondEmail);

        expect (results[0].email).equal(firstEmail);
        expect (results[0].hasMatch).equal(true);

        expect (results[1].email).equal(secondEmail);
        expect (results[1].hasMatch).equal(false);

        expect(results.length).equals(2);
    });
});