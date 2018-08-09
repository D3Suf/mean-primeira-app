/**
 * This approach is recommended by styleguide johnpapa
 * PT-PT
 * Com o [IIFE] removemos as variaveis do scope global do js
 * Como o nosso codigo é minificado e colocado num unico ficheiro js,
 * existe a possiblidade de termos colisões de variaveis globais, para evitar
 * esse tipo de variaveis envolvemos os nossos componentes em funções invocadas automaticamente
 *
 */
(function () {
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        dashboardController
    ]);

    function dashboardController($http) {
        /** vm -> ViewModel */
        const vm = this;
        vm.getSummary = function () {
            const url = 'http://localhost:3003/api/billingSummary';
            // $http -> service do angular
            $http.get(url).then(function (response) {
                const {credit = 0, debt = 0} = response.data;

                vm.credit = credit;
                vm.debt = debt;
                vm.total = credit - debt;
            });
        };

        vm.getSummary();
    }
})()

// -> estes ultimos dois parenteses chamam a função
