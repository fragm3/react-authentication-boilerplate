# React Boilerplate Authentication

  - Authentication
  - Private routes
  - Basic structure
  - Backend(Node) integration
  - Captcha(Using random number generator)
  - Validation

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Folder Structure

After creation and a successful build, your project should have the following file structure:

```
authentication/
  README.md
  node_modules/
  build/
  package.json
  public/
    index.html
  src/
    components/
        login/
            captcha.js
            login-button.js
            login.css
            login.js
        signup/
            signup.js
            signup.css
        structure/
            Footer.js
            Header.js
            Navigation.js
    utils/
        chucknorris-api.js
    global.js
    App.js
    App.test.js
    index.css
    index.js
```
* `public/index.html` is the page template.
* `src/index.js` is the JavaScript entry point.
* `src/App.js` is the component which contains React routes to all other components.
* `src/components/` any new component can be added in this folder, given that the file is reused or should be unique in some way. All static files are present in this component as well.
* `src/images/` contains all the static images being used in the App.
* `src/utils/` contains all utility functions(which can be imported to other components)
* `src/App.test.js/` is the entry point for all tests

### Installation

1. Running backend app
```sh
$ git clone https://github.com/fragm3/react-authentication-backend
$ npm install
$ nodemon server.js
```

2. Running react app
```sh
$ git clone https://github.com/fragm3/react-authentication-boilerplate
$ cd authentication
$ npm install
$ npm run start
```

License
----

MIT

