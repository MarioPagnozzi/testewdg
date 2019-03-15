export default {
    endpoint: 'token',
    configureEndpoints: ['token'],
    loginUrl: 'api/login',  
    signupUrl: 'api/login',
    loginRoute: '/login',
    signupRoute: '/signup',
    profileUrl: 'me',
    unlinkUrl: 'me/unlink',
    loginRedirect: 'http://localhost:8080',
    logoutRedirect: 'http://localhost:8080',
    loginOnSignup: false,
    storageChangedReload: true,    
    expiredRedirect: 1,           
    providers: {
        google: {
          url: 'google',
          clientId: '239531536023-ibk10mb9p7ullsw4j55a61og5lvnjrff6.apps.googleusercontent.com'
        },
        facebook:{
          url: 'facebook',
          clientId: '1465278217541708498'
        }
    }
};
