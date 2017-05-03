MebelesApp.controller('BooksController', function($scope, $http) {
    console.log("init boxes controller");

    $http.get('data/ru/books.json').success(function(data) {
        $scope.products = data.products;
    });


});
