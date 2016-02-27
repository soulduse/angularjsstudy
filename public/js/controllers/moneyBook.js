
angular.module('moneyBook',[])
.controller('moneyBookController', function($scope, $filter, $http, $timeout, $q, $timeout){

		$scope.remove = function(index){
			$scope.items.splice(index, 1);
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
				console.log(totalPrice);
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
		$scope.pushData = function(){
			console.log('pushData!');
			$scope.addItem.date = new Date();
			$http.post('/money-book/data', $scope.addItem)
			.success(function(data){
				if(data){
					alert('데이터가 추가 되었습니다.');
					$scope.refresh();
					$scope.loadData();
				}else{
					alert('데이터가 추가되지 못했습니다.');
				}

				console.log('data !! : '+data);
				
			});
		}
		
	});