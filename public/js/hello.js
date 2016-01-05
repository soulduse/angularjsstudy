
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

		$scope.remove = function(index){
			$scope.items.splice(index, 1);
		}

		$scope.add = function(){
			var item = {
				title : $scope.addItem.title,
				count : $scope.addItem.count,
				price : $scope.addItem.price
			}

			$scope.items.push(item);
			$scope.refresh();
		}

		$scope.refresh = function(){
			$scope.addItem = {
					title : '',
					price : 0,
					count : 0
				}
		}

		$scope.bill = {
			totalPrice : 0,
			discountPrice : 0,
			payPrice : 0
		}

		$scope.total = function(){
			var totalPrice = 0;
			angular.forEach($scope.items, function(item){
				totalPrice += item.count * item.price;
			});

			$scope.bill.totalPrice = totalPrice;
			$scope.bill.discountPrice = (totalPrice > 20000) ? totalPrice/10 : 0;
			$scope.bill.payPrice = totalPrice - $scope.bill.discountPrice;
		}

		// $scope.totalPrice = function(items){
		// 	var total = 0;

		// 	for(var i=0; i<items.length; i++){
		// 		total += items[i].price * items[i].count;
		// 	}

		// 	console.log(total);
		// 	return total;
		// }

		// $scope.salePrice = function(totalPrice){
		// 	if(totalPrice >= 20000){
		// 		return totalPrice*0.1;
		// 	}else{
		// 		return 0;
		// 	}
		// }

		// $scope.payPrice = function(totalPrice,salePrice){
			
		// 	return totalPrice-salePrice;
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