angular.module('book')
.controller('bookListCtrl', function($scope, $filter){
	var selectedGrade = null;

	$scope.selectGrade = function(newGrade){
		console.log('newGrade : '+newGrade );
		selectedGrade = newGrade.length;
	}

	$scope.selectHome = function(newGrade){
		console.log('newGrade : '+newGrade );
		selectedGrade = newGrade;
	}

	$scope.gradeFilterFn = function(book){
		console.log('book : '+Math.floor(book.grade));
		return selectedGrade == null || Math.floor(book.grade) == selectedGrade;
	}
});