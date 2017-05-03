MebelesApp.directive("product", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/item/product.html',
        scope: true,
        transclude : false,
        scope: {
            product : "="
        },
        controller: function($scope, $location){

        }
    };
});
