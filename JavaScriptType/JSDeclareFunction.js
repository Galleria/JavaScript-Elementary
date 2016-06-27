function helloJS(){
	console.log('helloJs');
}

helloJSxp = function(){
	console.log('helloJSxp');
}

function outside() {
	var x = 10;
	function inside(x) {
		return x;
	}
	return inside;
}
result = outside()(20); // returns 20 instead of 10

console.log(result);
console.dir( outside() );

/*
//es 6 
function defaultParameters( defaults = "default" ){
	console.log(defaults);
}

defaultParameters();
defaultParameters('is not default');

*/

/*
//es 6 
function multiply(multiplier, ...theArgs) {
	return theArgs.map(x => multiplier * x);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
*/

// arrow function
var a = [
         "Hydrogen",
         "Helium",
         "Lithium",
         "Beryl­lium"
       ];
console.log( a.map( s => s.length ) );