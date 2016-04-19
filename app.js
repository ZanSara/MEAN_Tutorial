var app = angular.module('flapperNews', []);


app.controller('MainCtrl', [
    '$scope',   //  The $scope variable serves as the bridge between Angular controllers and Angular templates. 
                //  If you want something to be accessible in the template such as a function or variable, bind it to $scope
                
    function($scope){
        $scope.test = 'Hello world!';
        // Data for the view
        $scope.posts = [
            {title: 'post 1', votes: 5},
            {title: 'post 2', votes: 2},
            {title: 'post 3', votes: 15},
            {title: 'post 4', votes: 9},
            {title: 'post 5', votes: 4}
        ];
        // Functions to be implemented in the view
        $scope.addPost = function(){
        	if($scope.title && !($scope.title === '') ) { 
            	$scope.posts.push({
            		title: $scope.title, 
            		link: $scope.link,
            		votes: 0
            	});
            	$scope.title = '';
            	$scope.link = '';
            }
        };
        $scope.incVotes = function(post) {
        	// Note that the page is immediately updated
		 	post.votes += 1;
		};
		$scope.decVotes = function(post) {
		 	post.votes -= 1;
		};


}]);
