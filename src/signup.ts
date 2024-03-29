import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService)

export class Signup {

  heading = 'Sign Up';
  auth;

  // These view models will be given values
  // from the signup form user input
  email = '';
  password = '';

  // Any signup errors will be reported by
  // giving this view model a value in the
  // catch block within the signup method
  signupError = '';

  constructor(auth) {
    this.auth = auth;
  };

  signup() {

    // Object to hold the view model values passed into the signup method
    var userInfo = { Email_Usuario: this.email, Senha_Usuario: this.password }

    return this.auth.signup(userInfo)
    .then((response) => {
      localStorage.setItem('access_token', response.access_token);
      console.log("Signed Up!", response);
    })
    .catch(error => {
      this.signupError = error.response;
    });

  };
}