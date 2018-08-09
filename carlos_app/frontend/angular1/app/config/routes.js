(function () {
    angular.module('primeiraApp').config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('dashboard', {
                url: '',
                templateUrl: "dashboard/dashboard.html"
            }).state('billingCycle', {
                templateUrl: "billingCycle/tabs.html"
            });

            $urlRouterProvider.otherwise('/dashboard')
        }
    ]);
})();
