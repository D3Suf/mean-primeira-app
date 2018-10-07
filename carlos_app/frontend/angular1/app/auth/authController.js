(function () {
    angular.module('primeiraApp').controller('AuthCtrl', [
        '$location',
        'msgs',
        'auth',
        AuthController
    ]);

    function AuthController($location, msgs, auth) {
        const vm = this;
        vm.loginMode = true;
        vm.changeMode = () => vm.loginMode = !vm.loginMode;
        vm.login = () => {
            auth.login(vm.user, err => console.log({err}));
        };
        vm.signup = () => {
            auth.signup(vm.user, err => console.log({err}));
        };
        vm.getUser = () => ({name: 'Mock User', email: 'mock@antonio-carlos.com'});
        vm.logout = () => {
            console.log('Logout ...');
        }
    }
})();