import {bindable, Aurelia} from 'aurelia-framework';
import {inject, computedFrom} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';

@inject(AuthService)

export class NavBar {
    auth;
    adm = true;
    assinante = true;
    modelo = true;
  // User isn't authenticated by default
  _isAuthenticated = false;
  @bindable router = null;

  constructor(auth) {
    this.auth = auth;   
  };

  // We can check if the user is authenticated
  // to conditionally hide or show nav bar items
  @computedFrom('authService.authenticated')
  get authenticated() {
      /*if (this.auth.authenticated)
      {
        if (localStorage.getItem('adm') === 'true') {
          this.adm = true;
        }
        if (localStorage.getItem('assinante') === 'true')
        {
          this.assinante = true;
        }
        if (localStorage.getItem('modelo') === 'true') {
          this.modelo = true;
        }
      }*/
      return this.auth.authenticated;
  }
  
}
