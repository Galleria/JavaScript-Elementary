'use strict'

// different between var and let are scope limit. 
var varType ="var Type I'm Global";	// limit in function or global.
let letType = "let Type I'm Global";	// limit in scope {}.
const constType = "constType";	// constant value.

console.log( varType );
console.log( letType );
console.log( constType );

//constType = "const Change value";	// error can't Assignment to constant variable.
//console.log(constType);

{
	var var_in_scope = "var in {}";
	let let_in_scope = "let in {}";
	console.log( var_in_scope );
	console.log( let_in_scope );
	console.log( varType );
	console.log( letType );
}
//console.log( let_in_scope );	// error let_in_scope is not declare.
console.log( var_in_scope );

function testInFunction(){
	var var_in_function = "var in function{}";
	let let_in_function = "let in function{}";
	console.log( var_in_function );
	console.log( let_in_function );
	console.log( varType );
	console.log( letType );
}

testInFunction();
//console.log( var_in_function );	// error var_in_function is not declare.
//console.log( let_in_function ); // error let_in_function is not declare.


	