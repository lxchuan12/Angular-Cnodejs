var app = angular.module('app', ['ngRoute','infinite-scroll']);
function routeConfig($routeProvider){
	$routeProvider
	.when('/',{controller:'IndexController',templateUrl:'index.html'})
	.when('/topic/:id',{controller:'TopicController',templateUrl:'topic.html'})
	.when('/user/:name',{controller:'UserController',templateUrl:'user.html'})
	.when('/about',{controller:'AboutController',templateUrl:'about.html'})
	.otherwise({redirectTo:'/'});
};
app.config(routeConfig);
app.controller('IndexController',function($scope,$http,$sce,$location){
	$scope.trustAsHtml = function (str) {
		var _str  = angular.element(str);
		var codes = _str.find('pre');
		for(var i = 0; i< codes.length; i++) {
			hljs.highlightBlock(codes[i]);
		}
		var html = _str[0] ? _str[0].innerHTML : null;
		return $sce.trustAsHtml(html);
	};
	
	//创建后台数据交互工厂
	var Topics=function(){
		this.lists=[];
		this.busy=false;
		this.page=2;
	};
	Topics.prototype.nextPage=function(){
		//console.log('1');
		if(this.busy) return;
		this.busy=true;		
		var url='https://cnodejs.org/api/v1/topics?limit=10&page='+this.page;
		//console.log(url);
		$http.get(url).success(function(response){
			//console.log('2');
			//console.log(response);
			var lists = response.data;
			//console.log(lists);
			for(var i=0;i<lists.length;i++){
				this.lists.push(lists[i]);
			}
			//console.log(this.lists);
			this.busy=false;
			this.page+=1;
		}.bind(this));		
	};
	$scope.back=false;
	$scope.topics=new Topics();
	$scope.toTopic=function(id){
		$location.path('topic/'+id);
	}
	$scope.toAbout=function(){
		$location.path('about');
	}
})


app.controller('TopicController',function($scope,$http,$routeParams,$sce,$location){
	$scope.trustAsHtml = function (str) {
		var _str  = angular.element(str);
		var codes = _str.find('pre');
		for(var i = 0; i< codes.length; i++) {
			hljs.highlightBlock(codes[i]);
		}
		var html = _str[0] ? _str[0].innerHTML : null;
		return $sce.trustAsHtml(html);
	};
	function init(){
		$http({
			url: 'https://cnodejs.org/api/v1/topic/' + $routeParams.id,
			cache: true
		}).success(function (response) {
			//console.log(response.data);
			$scope.contents = response.data;
		});
		$scope.back=true;
	}
	init();
	$scope.toUser=function(name){
		$location.path('user/'+name);
	}
});
app.controller('UserController',function($scope,$http,$routeParams,$location){	
	function init(){
		var tab = new fz.Scroll('.ui-tab', {role: 'tab'});
		$http({
			url: 'https://cnodejs.org/api/v1/user/'+$routeParams.name,
			cache: true
		}).success(function (response) {
			//console.log(response.data);
			$scope.user = response.data;
		});
		$scope.back=true;
	}
	init();
	$scope.toTopic=function(id){
		$location.path('topic/'+id);
	}
});
app.controller('AboutController',function($scope,$http){
	$scope.back=true;
});
