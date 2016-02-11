
angular.module('moneyBook',[])
.controller('moneyBookController', function($scope, $filter, $http, $timeout, $q, $timeout){

		$scope.toUpper = function(){
			$scope.hello.msg = $filter('uppercase')($scope.hello.msg);
		}

		$scope.remove = function(index){
			$scope.items.splice(index, 1);
		}

		$scope.add = function(){
			var item = {
				date : '11111',
				description : $scope.addItem.description,
				money : $scope.addItem.money
			}

			$scope.moneyBooks.push(item);
			$scope.refresh();
		}

		$scope.refresh = function(){
			$scope.addItem = {
					date : '',
					description : '',
					money : 0
				}
		}

		$scope.bill = {
			totalPrice : 0
		}

		$scope.total = function(){
			var totalPrice = 0;
			angular.forEach($scope.moneyBooks, function(item){
				totalPrice += item.money;
			});
			$scope.bill.totalPrice = totalPrice;
		}

		// $scope.hello.msg = '안녕하세요.' 와 같다.

		$scope.loadData = function(){
			$http.get('/money-book/data')
			.success(function(data){
				$scope.moneyBooks = data;
				$scope.total();
				console.log('토탈 금액 : '+$scope.bill.totalPrice);
			}).error(function(data){

			});
		}
		// Ajax post 추가 코드
		$scope.pushData = function(product){
			$http.post('/money-book/data')
			.success(function(data){
				$scope.moneyBooks.push
			})
		}
		
	});