import {AuthService} from 'aurelia-authentication';
import {Aurelia, inject, PLATFORM} from 'aurelia-framework';
import {Router, Redirect} from 'aurelia-router';

@inject(AuthService, Router, Redirect)
export class logout
{
    auth;    
    aurelia;
    router;
    constructor(auth, aurelia, router)
    {
        this.auth = auth;        
        this.aurelia = aurelia;
        this.router = router;

    }
    activate(){
        this.auth.logout().then(() => { localStorage.clear(); });
       
    }
   
}