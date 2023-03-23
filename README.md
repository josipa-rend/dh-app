# DhApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

### Running the app

npm install 
npm start

### Design

- frontend app running on port 4200 (be: https://github.com/josipa-rend/code-challenge)
- developped in angular
- components: home, login
- services: auth, encoder
- helpers: interceptor, validators

- auth.service.ts: authentication is done by sending credentials to the user: if they are correct token is returned and saved in localStorage so it can be send in headers of subsequent requests, that will be used on server side to authorize the request. Headers are included in auth.interceptor.ts. Services' endpoint is called from login component.

- encoder.service.ts: contains fuction for encoder request,is injected in home component where the function is called with user inserted text in 'input' field of form that is displayed. The response is then shown in the 'output' field of the form.






## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- cd /Applications
open -a "Google Chrome" --args --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp --disable-site-isolation-trials -->

