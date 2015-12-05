
/**
var app = angular.module('product', []);
app.controller();

>> 변수에 담아서 활용할때는 확장성이 필요할때 사용

angular.module('product'[]) >> 앵귤러 모듈 이름 product 으로 정함

angular . controller .filter는 angular가 제공하는 기능 

*/




angular.module('product',['customFilter'])
.controller('productCtrl', function($scope){       // 컨트롤러 이름은 productsCtrl 이고 안에 스코프 의 데이터를 사용한다.
    $scope.data = {     // .data라는 이름으로 객체를 만들어줌
        products : [
        {category : 'Watersports', description:'1인용 보트', name:'카약', price:'270000', id:1},
        {category : 'Watersports', description:'보호 장비', name:'보호재킷', price:'48000', id:2},
        {category : 'Soccer', description:'FIFA 규격의 무게', name:'축구공', price:'28000', id:3},
        {category : 'Soccer', description:'Nike', name:'축구화', price:'160000', id:4},
        {category : 'Soccer', description:'상,하의', name:'유니폼', price:'97000', id:5},
        {category : 'BasketBall', description:'KBL 공식 지정구', name:'농구공', price:'56000', id:6},
        {category : 'BasketBall', description:'2015 서울 StreetBall', name:'대회참가권', price:'20000', id:7},
        {category : 'BasketBall', description:'조던 6', name:'농구화', price:'180000', id:8},
        {category : 'BasketBall', description:'겨울용', name:'이너웨어', price:'46000', id:9}
    ]};
});

