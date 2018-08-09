(function () {
    angular.module('primeiraApp').component('valueBox', {
        bindings: {
            grid: '@', // tamanho da grid
            colorClass: '@', // class que dá bg à box
            value: '@',
            text: '@',
            iconClass: '@'
        },
        controller: [
            // atenção à necessidade de usar metódos de live cycle como o $onInit
            // para prevenir que as variaveis já estão inicializadas
            function () {
                /**
                 * example
                 * this.$onInit = function () {
                 *     // faz algo
                 * }
                 */
            }
        ],
        template:
            `<div class="{{$ctrl.grid}}">
            <div class="small-box {{$ctrl.colorClass}}">
                <div class="inner">
                    <h3>{{$ctrl.value}} €</h3>
                    <p>{{$ctrl.text}}</p>
                </div>
                <div class="icon">
                    <i class="{{$ctrl.iconClass}}"></i>
                </div>
            </div>
        </div>`
    });
})();
