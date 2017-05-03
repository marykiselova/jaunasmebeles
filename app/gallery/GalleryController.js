MebelesApp.controller('GalleryController', function($scope, $http) {
    console.log("init gallery controller");

    $http.get('data/ru/gallery.json').success(function(data) {
        $scope.products = data.products;
    });


});
