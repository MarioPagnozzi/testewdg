import {AuthService} from 'aurelia-authentication';
import {inject, PLATFORM} from 'aurelia-framework';
import {Router, Redirect} from 'aurelia-router';
import { aureliaHideClassName } from 'aurelia-templating-resources';

@inject(AuthService, Router, Redirect)

export class Login {

  auth;
  heading = 'Login';

  Email_Usuario = '';
  Senha_Usuario = '';

 
  loginError = '';
  authService: AuthService;
  router;
  aurelia;

  constructor(auth, authService: AuthService, router, aurelia) {
    this.auth = auth;
    this.authService = authService;
    this.router = router;
    this.aurelia = aurelia;
  };

  login() {
    var userInfo = { email: this.Email_Usuario, password: this.Senha_Usuario }
    return this.auth.login(userInfo)
    .then(response => {
        localStorage.setItem('access_token', response.token.accessToken);
        
        this.router.reload();  

        console.log("Login response: " + JSON.stringify(response.token.accessToken));       
        this.router.navigateToRoute('wellcome', {replace: true, force: true});
    }) 
    .catch(error => {
      this.loginError = error.response;
    });
  };
  authenticate(name){
    return this.auth.authenticate(name, false, null)
    .then((response)=>{
        console.log("auth response " + response);
    });
};
}
