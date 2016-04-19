var app = angular.module('flapperNews', []);

// Post factory!!
app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}]);

app.controller('MainCtrl', [
    '$scope',   //  The $scope variable serves as the bridge between Angular controllers and Angular templates. 
                //  If you want something to be accessible in the template such as a function or variable, bind it to $scope
    'posts',		// This is the post factory declared below which contains all posts data
    function($scope, posts){
		
        // Scope data for the view
        $scope.test = 'Hello world!';
        
        // Binds the factory to this scope!
        $scope.posts = posts.posts; 
        
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
