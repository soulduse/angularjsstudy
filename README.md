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


[2016-01-09]
--------------------
1. EJS, jade가 뭔가요 => Node진형의 서버사이드 템플릿 엔진
    - html 그리는게 끝 
    - 역할 끝 ( 그 이상은 못한다. )

2. angular와 위 2개가 뭐가 다른가요 => 클라이언트 템플릿 엔진
    - 서버사이드 템플릿 엔진에서 angular로 데이터를 주입하거나
    - Ajax로 angular가 데이터만 호출


- 좋은 방안 : EJS에서 데이터만 넘겨주고 나머지는 Angular에서 데이터를 가지고 논다.
- 템플릿 엔진은 클라이언트, 서버단 두 개를 대부분 사용한다.

- 이전 방식은 서버에서 데이터를 다 그려준 다음에 화면에 뿌려주고 JQuery를 가지고 활용 하는 방법.
- 현재 서버 사이드에서 사용할 수 있는 템플릿 엔진은 EJS, jade 밖에 없다. 



3. Ajax는 비동기 처리 방식


서버에서 데이터를 가지고 오는 것
서버에 데이터를 전송하여 DB에 저장 하는 것 
=> 서버와 통신을 하여 작업하는 것들(시간이 많이 걸리는 작업)은 사용자를 계속 기다리게 할 수 없다.
웹은 사용자들이 1초 이상 기다리지 않는다.

UI상에서는 사람들이 계속 이용하게 하고, 
시간이 많이 걸리는 작업들은 요청만 하고 끝나면 그때 요청후 작업들을 수행한다.

deprecated - 이 코드는 사라질 예정이다. 사용을 권장하지 않는다.

promise pattern
```
$scope.loadData = function(){
	alert('시작');
	$http.get('/hello/data')
	.success(function(data){
		$scope.products = data;
		alert('데이터 도착');
	}).error(function(data){
		
	});

```

[2016-01-16]
--------------------
1. 회사 사정에 따라서 첫번째 방식과 두번째 방식으로 나뉜다.
    - 1번째 방식 : 사용자가 페이지를 요청 했을 때, 서버에서 HTML + Data를 가공하여 뿌려준다.
    - 2번째 방식 : 서버에서는 Data만 제공한다.

    - 2번째 방식의 장단점은 
        - 장점 : 디바이스별 대응이 편하고 쉽다.
                 개발 영역간 침범이 적다.

          단점 : 서버에서 부하가 많이 생기므로 금전적인 문제 발생



2. http.post 를 사용 할 때, 
국제 표준 기법 (ECMA Script)의 경우 promise를 권장 
- 기존에는 success, error 두개의 경우로 나누어 사용 하였는데, 이후는 (promise)then을 사용한다.
- response : 결과값 , 어떤 에러 코드를 가지고 있는지도 함께 결과가 날라온다. ( reponse.status )


3. CSS는 기본 마크업 언어 (나열) 이지만 
   CSS를 코딩 하여 빌드할 때 컴파일 할 때 CSS 코드로 바꾸어 주는 코드를 그대로 사용 하면된다.
   => ssas, 리스 


4. 린스타트업 
    - 직군 상관없이 모든곳에 참여.
    - 직군별로 나누는게 아니라 서비스별로 나눈다.
    - Devops 개발방법론.

5. 책 추천 
    - 심플하게 생각하다. - Line 사장(비전과 계획도 필요없다.)
         - 그때그때 필요한 것들만 찾아서 한다.
    - 린스타트업


6. promise
    - 정의 : 내가 미래에 일어날 일을 약속 잡는 것.
     ex) 내가 시험을 100점 맞으면 상을줘 = 미리 약속을 잡아놓는 것이 promise
         시험을 친다 - 100점    -> 상을 받는다.
                    - 못맞는다  -> 숙제를 한다.
    - 시험을 치게 할 (명령을 내릴)놈이 필요한데 이게 Angular에서는 [defer]이다.
    - 지금 실행 시키자 라고 하는것이 [resolve]
        - resolve(data) : data = 인자값으로 데이터를 넣을 수 있다
    - 사용이유 : 콜백 지옥 일 때 코드관리가 너무 힘들다.
        - 비동기 안에 비동기, 또 그 비동기 안에 비동기 ....
        - 따라서 나온 것이 promise/Async 방식