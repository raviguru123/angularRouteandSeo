var app=angular.module("main.module",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider.state("/",{
		url:"/",
		templateUrl:"./index.html"
	}).state("child1",{
		url:"/child1",
		templateUrl:"./html/child1.html"
	}).state("child2",{
		url:"/child2",
		templateUrl:"./html/child2.html"
	})

})