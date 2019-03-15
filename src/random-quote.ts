
import { ExcluirUsuario } from './excluirUsuario';
import { inject } from 'aurelia-dependency-injection';
//import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';
import {HttpClient, json} from 'aurelia-fetch-client';
import { AuthService } from 'aurelia-authentication';
import { getElementName } from 'aurelia-templating-resources';
import * as $ from 'jquery';
import { Router } from 'aurelia-router';
import {DialogService} from 'aurelia-dialog';



let httpClient = new HttpClient();

@inject(HttpClient, AuthService, Router,DialogService)

export class RandomQuote {
  static inject = [DialogService];
  http;
  heading = 'Random Quote';
  message = localStorage.getItem("access_token");
  messageErro;
  datasource;
  router;
  

  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 2,
    messages: {
      itemsPerPage: "Itens por Página",
      display: "Mostrando {0}-{1} de {2} Usuários"
    }
  };


  randomQuote = '';
  auth;
  modal;
  dialogService;

  constructor(http, auth, router, dialogService: DialogService) {
    this.http = http;
    this.auth = auth;   
    this.router = router;
    this.dialogService = dialogService;
   
  };
  usuario;
  DetalheUsuario(id: any): void {
    this.router.navigateToRoute('usuario',{id: id});
  }
  ExcluirUsuario(id: any) {
     console.log(id);
    
     httpClient.fetch('https://reqres.in/api/users/'+id, {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("access_token")
          }})
      .then(response => response.json())
      .then(data => {console.log(this.usuario = data)})
      .then(() => {
        console.log(this.usuario);
        
        //let user = {avatar: this.usuario.avatar, first_name: this.usuario.first_name }

        this.dialogService.open({viewModel: ExcluirUsuario, model: this.usuario.data, lock: true}).whenClosed(
          response => {
            if (!response.wasCancelled) {
              return httpClient.fetch('https://reqres.in/api/users/'+this.usuario.id, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                    }})
                .then(rep => rep.json())
                .then(() => {alert('Usuario '+ this.usuario.id + ' Excluído')})
                .catch(() => {
                  console.log(this.messageErro = "Acesso Negado!");
                });  
            } else {console.log('bad');
            response.output;
          }
         });
      })
      .catch(error => {
        console.log(this.messageErro = "Acesso Negado!");
      });   
     
     
    
  }

  retornaUsuario(id){
    return httpClient.fetch('https://reqres.in/api/users/'+id, {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("access_token")
          }})
      .then(response => response.json())
      .then(data => {console.log(this.usuario = data)})
      .catch(error => {
        console.log(this.messageErro = "Acesso Negado!");
      });   

   }
  
  activate() {  
    

    return httpClient.fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access_token")
        }})
    .then(response => response.json())
    .then(data => {console.log(this.message = data)})
    .catch(error => {
      console.log(this.messageErro = "Acesso Negado!");
    });   
  };


}
