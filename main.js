'use strict';

var app = angular.module('reviews', []);

app.controller('GetReviews', function ($scope, $http, nytLogoService) {
    $http({
        method: 'GET',
        url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=c140b143e99a457c932cfd275afacfa7"
    }).success(function (data) {
        $scope.results = data.results;
    });
    $scope.nytLogo = nytLogoService.url;
    $scope.qty = 20;
});


app.filter('postFilter', function () {
    return function (results, qty) {
        var filtered = [];
        for (var i = 0; i < qty; i++)
            filtered.push(results[i]);
        return filtered;
    };
});


app.service('nytLogoService', function () {
    return {
        url: 'https://a1.nyt.com/assets/homepage/20161221-123526/images/foundation/logos/nyt-logo-379x64.png'
    }
});