//Construntor

// var box = function(size) {
// 	this.size = size;
// 	this.weight = function() {
// 		return size+"kg";
// 	asdadadsadasd
// };

// var c = new box(5);
// console.log(c.weight());


//anomonus function
var mod =(function() {
	var a= 10 ;
	var b= 20;


	var sf = function(){
		console.log('runed');
		a+=b;
		return a;
	}

	console.log('run');

	return {
		sum : sf,
	}
})();

var res = mod.sum();
console.log(res);

var res = mod.sum();
console.log(res);
