
// function HelloController(){
// 	$scope.hello = {
// 		msg : '안녕하세요'
// 	}
// }

// []을 만들면 새로 만들겠다.

angular.module('hello', [])
	.controller('HelloController', function($scope, $filter){
		$scope.hello = {
			msg : 'hello.'
		}

		$scope.toUpper = function(){
			$scope.hello.msg = $filter('uppercase')($scope.hello.msg);
		}

		// $scope.hello.msg = '안녕하세요.' 와 같다.

	});