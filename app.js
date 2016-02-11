var express = require('express');
var path = require('path');

var app = express();
// 필요한 라이브러리 가져온다.


// 서버 관리 설정 
app.use(express.static(path.join(__dirname, 'public')));
// 현재 디렉토리에서 퍼블릭을 붙인것을 스테틱으로 올릴것이다

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/index.html'));
});
// get, post 중 get방식을 사용할 것이다, 슬래쉬 주소를 사용하고 리퀘스트 리스폰스를 사용한다.
// 리스폰스에다가 파일을 넣어줄것인데 저것을 호출하면저 파일을 호출할것이다.
// /public/html/index.html
// __dirname > 현재 프로젝트 디렉토리

app.get('/todo', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/todo.html'));
});

app.get('/products', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/product.html'));
});

app.get('/books', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/book.html'));
});


app.get('/hello', function(req, res){
	res.sendFile(path.join(__dirname + '/public/html/hello.html'));
});

app.get('/hello/data', function(req, res){
	var items = [
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
			},
			{
				title : '필통',
				count : 3,
				price : 3000
			}

		];
	res.json(items);
});

app.get('/money-book', function(req, res){
	res.sendFile(path.join(__dirname+'/public/html/money-book.html'));
});


app.get('/money-book/data', function(req, res){
	var moneyBook = [
		{
			date : '2016. 1. 11. 오후 8:25:39',
			description : '저녁식사',
			money : 7000
		},
		{
			date : '2016. 1. 12 오전 7:29:49',
			description : '아침식사',
			money : 3500
		},
		{
			date : '2016. 1. 12. 오후 1:00:05',
			description : '점심식사',
			money : 5000
		}
	];
	res.json(moneyBook);
})


app.listen(8080);
// 포트 8080 사용하겟다.
console.log('Express Listening on port 8080...');
// logger, System.out.println()