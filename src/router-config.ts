import {AuthenticateStep} from 'aurelia-authentication';
import {inject, PLATFORM} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import { platform } from 'os';
import { config } from 'bluebird';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)

export default class {
 router;
  constructor(router) {
    this.router = router;
  };

  configure() {

    var appRouterConfig = function(config) {

      config.title = 'Teste-WDG';
      config.options.pushState = true;
      config.options.hashChange = false;

      config.addPipelineStep('authorize', AuthenticateStep);

      config.map([
          { route: ['','welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./welcome'), nav: true, title:'HOME' },
          { route: 'random-quote', 
            name: 'random-quote', 
            moduleId: PLATFORM.moduleName('./random-quote'), 
            nav: true, title:'Usuário',
            authRoute: true,
            settings: {dropdown: true, menu: 'cadastro', role: 'adm'}
          },  
          {
            route: 'usuario/:id',
            name: 'usuario',
            moduleId: PLATFORM.moduleName('./usuario/usuario'),
            nav: false,
            title: 'Usuario',
            authRoute: true           
          },     
       
          {
            route: 'modelo',
            name: 'modelo',
            moduleId: PLATFORM.moduleName('./modelo/modelo'),
            nav: true,
            title: 'Modelo',
            authRoute: true,
            settings: {dropdown: true, menu: 'cadastro', role: 'adm'}
          },
         { route: 'signup', 
           name: 'signup', 
           moduleId: PLATFORM.moduleName('./signup'), 
           nav: false, 
           title:'Meu Perfil', 
           authRoute: true,
           settings: {role: 'mod'}
          },
          { route: 'login', 
            name: 'login', 
            moduleId: PLATFORM.moduleName('./login'), 
            nav: false, 
            title:'Login Adm', 
            authRoute: true,
            settings: {role: 'adm'} },
          { route: 'logout', 
            name: 'logout', 
            moduleId: PLATFORM.moduleName('./logout'), 
            nav: false, 
            title:'Logout', 
            authRoute: true,
            settings: {role: 'todos'} 
          }
        ]);
      };

    // The router is configured with what we specify in the appRouterConfig
    this.router.configure(appRouterConfig);
   

  };
}
