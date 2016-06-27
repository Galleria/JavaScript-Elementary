'use strict'

let arrayNumber = [0,1,3,5,7,9,12,15];
// let arrayNumber = [];
// let arrayNumber = new Array();
console.log( Array.isArray( arrayNumber ) );

console.log( arrayNumber.length );

console.log( arrayNumber[0] );	// get first
console.log( arrayNumber[arrayNumber.length-1] );	// get last

console.log( arrayNumber.indexOf(9) );	// get index of 9
console.log( arrayNumber.lastIndexOf(9) );	// get lastindex of 9 if have duplicate

//Array to String.
console.log( arrayNumber.toString() );
console.log( arrayNumber.join("|") );

// looping in Array
console.log('Array loop with forEach');
arrayNumber.forEach(function (item, index, array) {
	  console.log(item, index);
});

console.log('Array loop with for');
for( let i=0 ; i< arrayNumber.length ; i++ ){
	console.log(arrayNumber[i], i);
}

console.log('Array loop with for In');
for( let number in arrayNumber ){
	console.log( arrayNumber[number] , number );
}

//push,pop,shift,unshift,splice

arrayNumber.push(18);
console.log( arrayNumber.length );
console.log( arrayNumber[arrayNumber.length-1] );
console.log( arrayNumber.toString() );


arrayNumber.pop();
console.log( arrayNumber.length );
console.log( arrayNumber[arrayNumber.length-1] );
console.log( arrayNumber.toString() );


arrayNumber.shift();
console.log( arrayNumber.length );
console.log( arrayNumber[0] );
console.log( arrayNumber.toString() );


arrayNumber.unshift(0);
console.log( arrayNumber.length );
console.log( arrayNumber[0] );
console.log( arrayNumber.toString() );


arrayNumber.splice(5,1);
console.log( arrayNumber.length );
console.log( arrayNumber[5] );
console.log( arrayNumber.toString() );


arrayNumber.splice(5,0,9);
console.log( arrayNumber.length );
console.log( arrayNumber[5] );
console.log( arrayNumber.toString() );


//sort, reverse
console.log( arrayNumber.sort() );
console.log( arrayNumber.sort(function(a, b) {return a - b;}) );

console.log( arrayNumber.reverse() );
console.log( arrayNumber.reverse(function(a, b) {return a + b;}) );


//filter
//callback function (value,index,array)
// return values that match condition.
function isAbrove10(value) {
	  return (value >= 10);
}
function isBelow10(value) {
	  return (value < 10);
}
console.log( arrayNumber.filter(isAbrove10) );
console.log( arrayNumber.filter(isBelow10) );


function printIndexIfEven(value,index){
	if( value%2 == 0 )
		console.log("Index : "+index+" is Even -> "+value);
}
arrayNumber.filter( printIndexIfEven );


function printAndMultiPly2IndexIfEven(value,index,array){
	if( value%2 == 0 )
		console.log("Index : "+index+" is Even -> "+value*this);
}
arrayNumber.filter( printAndMultiPly2IndexIfEven , 2 );



//some
//callback function (value,index,array)
//return true if some match in condition
function isAbrove10(value) {
	  return (value >= 10);
}
function isBelow10(value) {
	  return (value < 10);
}
console.log( arrayNumber.some(isAbrove10) );
console.log( arrayNumber.some(isBelow10) );



//every
//callback function (value,index,array)
//return true if all match in condition
function isAbrove10(value) {
	  return (value >= 10);
}
function isBelow10(value) {
	  return (value < 10);
}
function isBelow20(value) {
	  return (value < 20);
}
console.log( arrayNumber.every(isAbrove10) );
console.log( arrayNumber.every(isBelow10) );
console.log( arrayNumber.every(isBelow20) );



//map 
//return array that had changed value.
function MultiPly3(value,index,array){
	return value*this;
}
console.log( arrayNumber.map(isAbrove10) );
console.log( arrayNumber.map(MultiPly3,3) );

console.log( Array.from(arrayNumber, x => x*3) );