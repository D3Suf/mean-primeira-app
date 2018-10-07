angular.module('primeiraApp').constant('consts', {
    appName: 'Home Bank',
    version: '1.0',
    owner: 'António Sousa [#Cod3r]',
    year: '2018',
    site: 'antonio-carlos.com',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts;
}]);