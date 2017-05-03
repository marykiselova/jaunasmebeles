MebelesApp.controller('BoxesController', function($scope, $http) {
    console.log("init boxes controller");

    $http.get('data/ru/boxes.json').success(function(data) {
        $scope.products = data.products;
    });


});
