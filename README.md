[Angular JS Study]
- 시작일 : 2015-11-29
- 장소 : 신촌 토즈


[npm설치 - 2015-11-29]
--------------
- npm install express --save
- npm

[기술스펙 - 2015-12-05]		
--------------
* Node, express, bower, angular, bootstrap, ajax, gulp, ejs

M : model 데이터
V : view
C : controller

[브랜치명]
--------------
* feature/pointstore-init

[진행순서]
--------------
1. public/js/controllers/product.js 생성
2. public/html/product.html 생성
3. public/js/filters/costomFilters.js 생성


[설명]
-------------

- $scope : 전역 scope
- $scope.변수명 - html이든 js든 같이 사용가능.
- html에서 A의 값을 변경 => js에도 값이 변경되어 반영된다.

- node app.js => Express Listening
-


웹팩 , 
react js, Angular > IE7,8 호환 x


[2015-12-12]
--------------------
```
$scope 혹은 $path 등 많다.
선언되어있는 것을 자동으로 주입해주겠다.
모듈명만 선언 해놓으면 자동으로 주입해주기 때문에 
$scope만 입력하면 안에 내용을 사용할수 있다.
 = 우리가 직접 넣어주는게 아니라 누군가 넣어주는 것.(의존성 주입 DI)

상황 - member.js, book.js 두개파일을 하나의 html에서 사용할때, 함수 이름이 같은 상황
member.js
    - add, update, delete, read
book.js
	- add, update, delete, read

total.html

같이 호출되고 나중에 호출된 놈이 덮어버린다.

위의 상황은 자바스크립트 네임스페이스 패턴 방식으로 해결 가능.



--------------
angular 데이터 바인딩
$scope - html, js가 같이 보도록 만들었다.

어트리뷰트 - html 태그안에 들어가는 것 ex) <input type
디렉티브 - 사용자가 직접 만들 수도 있다.


```