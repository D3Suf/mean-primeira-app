(function () {
    angular.module('primeiraApp').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '='
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
                        ng-model="$ctrl.model"/>
                </div>
            </div>
        `
    });
})();