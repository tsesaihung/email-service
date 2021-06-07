// const fs = require('fs');

// const EmailService = {
//     firstValidationMethod: function(value) {
//         //inspect the value
//     },

//     secondValidationMethod: function(value) {
//         //inspect the value
//     },

//     getAllUsers: function(value) {
//         // const rawdata = fs.readFileSync('./users.json');
//         // const users = JSON.parse(rawdata);
//         // return users;



//         return fetch('./users.json')
//         .then(users => users.json());
//     }
// };

export function getUser(value) {

    return fetch('http://localhost:3333/users'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    .then(function(response){
        console.log(response)
        return response.json();
      });
}

// export default EmailService;