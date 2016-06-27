'use strict'
var mapping = new Map();
mapping.set("dog", "woof");
mapping.set("cat", "meow");
mapping.set("bird", "jibjib");

console.log( mapping.size );

console.log('mapping.get("fox") : '+ mapping.get("fox") );
console.log('mapping.has("fox") : '+ mapping.has("fox") );
console.log('mapping.has("bird") : '+ mapping.has("bird") );

console.log('mapping.delete("dog") : '+ mapping.delete("dog") );
console.log('mapping.delete("dog") : '+ mapping.delete("dog") );
console.log('mapping.size : '+ mapping.size );
console.log('mapping.has("dog") : '+ mapping.has("dog") );


for (let entry of mapping) {
	console.log( entry );
    console.log( entry[0] );
    console.log( entry[1] );
}
/*
for (let [key,value] of mapping) {
	console.log( key );
    console.log( value );
}
*/

mapping.clear();
console.log('mapping.size : '+ mapping.size );	// 0 