(function () {
    angular.module('primeiraApp').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@'
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
                    <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" type="{{ $ctrl.type }}"/>
                </div>
            </div>
        `
    });
})();