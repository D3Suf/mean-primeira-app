(function () {
    angular.module('primeiraApp').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=', // está alteração não tem alteração nos dois componentes, biderecional
            readonly: '<' // está alteração não tem alteração no componente pai
        },
        controller: [
            function () {

            }
        ],
        template:
            `
            <div class="{{ $ctrl.grid }}">
                <div class="form-group">
                    <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                    <input id="{{ $ctrl.id }}" class="form-control" 
                        placeholder="{{ $ctrl.placeholder }}" type="{{ $ctrl.type }}" 
                        ng-model="$ctrl.model" ng-readonly="$ctrl.readonly"/>
                </div>
            </div>
        `
    });
})();