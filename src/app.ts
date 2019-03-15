
import {inject} from 'aurelia-framework';
import {Router, Redirect} from 'aurelia-router';

import {HttpClient, json} from 'aurelia-fetch-client';
import { method } from 'bluebird';
import {FetchConfig, AuthService} from 'aurelia-authentication';
import AppRouterConfig from 'router-config';
import '@progress/kendo-ui/js/kendo.all';
import '@progress/kendo-ui/js/kendo.mobile';

import $ from 'jquery';

let httpClient = new HttpClient();

@inject(Router, AppRouterConfig, FetchConfig, AuthService)
export class App {
 email;
 senha;
 meusDados;
 router;
 fetchConfig;
 appRouterConfig;
 auth;

 constructor(router, fetchConfig, appRouterConfig, auth) {

  this.router = router;

  // Client configuration provided by the aureliauth plugin
  this.fetchConfig = fetchConfig;

  // The application's configuration, including the
  // route definitions that we've declared in router-config.js
  this.appRouterConfig = appRouterConfig;

  this.auth = auth;
};

activate() {

  // Here we run the configuration when the app loads
  this.fetchConfig.configure();
  this.appRouterConfig.configure();

};

 
  /*login() {
    console.log(this.email);
    console.log(this.senha);
    this.meusDados = {
      Email_Usuario: this.email,
      Senha_Usuario: this.senha
    }
    httpClient.fetch('https://localhost:44300/api/token', 
     { method: "POST", 
      body: JSON.stringify(this.meusDados)
    } )
    .then(Response => Response.json())
  
    
    
  }*/
}
