var app = angular.module('flapperNews', []);


app.controller('MainCtrl', [
    '$scope',   //  The $scope variable serves as the bridge between Angular controllers and Angular templates. 
                //  If you want something to be accessible in the template such as a function or variable, bind it to $scope
                
    function($scope){
        $scope.test = 'Hello world!';
        $scope.posts = [
            'post 1',
            'post 2',
            'post 3',
            'post 4',
            'post 5'
        ];

}]);
