var app = angular.module('flapperNews', []);


app.controller('MainCtrl', [
    '$scope',   //  The $scope variable serves as the bridge between Angular controllers and Angular templates. 
                //  If you want something to be accessible in the template such as a function or variable, bind it to $scope
                
    function($scope){
        $scope.test = 'Hello world!';
        // Data for the view
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ];
        // Functions to be implemented in the view
        $scope.addPost = function(){
        	if($scope.title && !($scope.title === '') ) { 
            	$scope.posts.push({title: $scope.title, upvotes: 0});
            	$scope.title = '';
            }
        };

}]);
