'use strict'

let result = 0;

function checkZeroLongIf(isZero){
	if( isZero == 0 ){
		result = 'zero';
	}else{
		result = 'non zero';
	}
	console.log('result is : '+ result );
}


function checkZeroShortIf(isZero){
	result = ( isZero == 0 ) ? 'zero' : 'non zero';
	console.log('result is : '+ result );
}


checkZeroLongIf(0);
checkZeroLongIf(10);

checkZeroShortIf(0);
checkZeroShortIf(10);