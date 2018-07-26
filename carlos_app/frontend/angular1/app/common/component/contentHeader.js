angular.module('primeiraApp').component('contentHeader', {
    bindings: {
        name: '@', // strings sem alterações
        small: '@',
    }, template: `
    <section class="content-header">
        <h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
    </section>
    `
});
// angular.module('primeiraApp').component('contentHeader', {
//     bindings: {
//         name: '@',
//         small: '@',
//     }, template: '' +
//         '<section class="content-header">' +
//         '<h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>' +
//         '</section>'
// });