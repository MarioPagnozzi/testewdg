import { inject } from 'aurelia-dependency-injection';
import { DialogController } from "aurelia-dialog";

export class ExcluirUsuario {
  static inject = [DialogController];
  usuario ;

  controller;
  constructor(controller: DialogController){
    this.controller = controller;
  }
  activate(usuario){
    this.usuario = usuario;
  }
}
