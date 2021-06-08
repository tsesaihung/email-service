export function getUser(value) {

    return fetch('/listUsers'
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