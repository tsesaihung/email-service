# email-service

    yarn global add serve
    serve -s build

    # add to package.json
    "proxy": "http://search-email-backend:8081"
    
    http://localhost:8081/listUsers
    curl -d '{"emails":"adamk@gmail.com,test@hotmail.com,anthony@hotmails.com,rsteiner@live.com,chaffar@aol.com"}' -H "Content-Type: application/json" -X POST http://localhost:8081/findUsers

    http://localhost:3000

    gpg --list-keys
    git config --global user.signingkey 15A7F79AA2A04A1311870F23BB33825AC9F8B069

    UI
    npm install --save-dev json-server
    npm config delete registry
    npm install -g npx
    npx create-react-app ui

    cd ui
    npm run api
    yarn start

    https://www.w3schools.com/react/react_components.asp
    https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
    https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
    https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

    UI 
    https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md
    https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/
    https://www.skptricks.com/2018/06/append-or-prepend-html-using-reactjs.html
    https://vaadin.com/forum/thread/2516081/automatic-scroll-down-to-bottom-of-textarea-or-other-component

    CORS
    https://www.pluralsight.com/guides/allow-access-control-origin-in-create-react-app
    https://javascript.info/fetch-crossorigin

    Testing
    https://reactjs.org/docs/testing-recipes.html#mocking-modules
    https://github.com/testing-library/jest-dom 