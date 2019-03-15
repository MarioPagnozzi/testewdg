import { Router } from 'aurelia-router';
import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';
import {HttpClient, json} from 'aurelia-fetch-client';
import { AuthService } from 'aurelia-authentication';
import { getElementName } from 'aurelia-templating-resources';
import * as $ from 'jquery';

let httpClient = new HttpClient();

@inject(HttpClient, AuthService, Router, URLSearchParams)

export class Usuario {
  messageErro;
  message;
  params;

 Update(){
   let id = this.message.data.id;
  return httpClient.fetch('https://reqres.in/api/users/'+id , {
    method: 'PUT',
    body: json(this.message.data), 
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    }})
.then(response => response.json())
.then(data => {alert('Usuário ' + id + ' Foi atualizado!')})
.catch(error => {
  console.log(this.messageErro = "Acesso Negado!");
});
 }
  activate(params) {    
   

    return httpClient.fetch('https://reqres.in/api/users/'+params.id, {
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
