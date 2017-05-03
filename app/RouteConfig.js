MebelesApp.config(function($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('/home', {
            url: '/home',
            contoller : "MebelesAppController",
            templateUrl: 'templates/home.html'
        })
        .state('/gallery', {
            url: '/gallery',
            templateUrl: 'templates/gallery.html',
            controller : "GalleryController",
            controllerAs : "galleryCtrl"
        })
        .state('/about', {
              url: '/about',
              templateUrl: 'templates/about.html'
        })
        .state('/contacts', {
            url: '/contacts',
            templateUrl: 'templates/contacts.html'
        })
        .state('/boxes', {
            url: '/boxes',
            templateUrl: 'templates/boxes.html',
            controller : "BoxesController",
            controllerAs : "boxesCtrl"
        })
        .state('/books', {
            url: '/books',
            templateUrl: 'templates/boxes.html',
            controller : "BooksController",
            controllerAs : "booksCtrl"
        });
;

});
