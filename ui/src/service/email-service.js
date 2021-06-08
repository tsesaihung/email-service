export function findUsers(input) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ emails: input })
    };

    return fetch('/findUsers', requestOptions)
        .then(function (response) {
            console.log(response)
            return response.json();
        });
}

// export default EmailService;