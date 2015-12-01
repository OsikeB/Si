angular.module('Si', ['ui.bootstrap', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'app/states/home.html',
    // controller: 'HomeCtrl as vm'
  })
  .state('shop', {
    url: '/shop',
    templateUrl: 'app/states/shop.html'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'app/states/contact.html'
  })
})
