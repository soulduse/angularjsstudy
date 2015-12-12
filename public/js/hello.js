
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

		// $scope.remove = function(item){
		// 	$scope.items.splice(index, 1);
		// }

		$scope.remove = function(index){
			var index = $scope.items.indexOf(item);
			$scope.items.splice(index, 1);
		}

		// $scope.sumPrice = function(price){
		// 	var sumPrice;
		// 	for(var i=0; i<$scope.items.lenth; i++){
		// 		sumPrice = scope.items[i].price;
		// 		console.log(sumPrice);
		// 	}

		// 	$scope.hello.totalPrice = sumPrice;
		// }

		$scope.items = [
			{
				title : '볼펜',
				count : 4,
				price : 1800
			},
			{
				title : '지우개',
				count : 1,
				price : 800
			},
			{
				title : '연필',
				count : 12,
				price : 400
			}

		];

		// $scope.hello.msg = '안녕하세요.' 와 같다.

	});