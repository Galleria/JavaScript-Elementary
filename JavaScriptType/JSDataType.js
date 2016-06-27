'use strict'

let string = 'string';
let char = 'c';

let number = 10;
let float = 10.1;
let double = 10.001;

let boolean = false;

let arrayNumber = [0,1,2,3];
let arrayString = ["Saab", "Volvo", "BMW"];
let object = {'name':'object','type':'object'};
let mapping = new Map();
let date = new Date();

console.log( typeof string );
console.log( typeof char );
console.log( typeof number );
console.log( typeof float );
console.log( typeof double );
console.log( typeof boolean );

console.log( typeof arrayNumber );
console.log( typeof arrayString );
console.log( typeof object );
console.log( typeof mapping );
console.log( typeof date );

console.log('is Array '+ Array.isArray( arrayNumber ) );
console.log('is Array '+ Array.isArray( arrayString ) );
console.log('is Array '+ Array.isArray( object ) );
console.log('is Array '+ Array.isArray( mapping ) );
console.log('is Array '+ Array.isArray( date ) );


	