'use strict'
let arrayNumber = [0,1,3,5,7,9,12,15];

{
	for (let i=0; i < arrayNumber.length; i++) {
		console.log('Walking east one step');
	}
}

{
	for(let i in arrayNumber){
		console.log( (2*arrayNumber[i]) );
	}
}

{
	for(let i of arrayNumber){
		console.log( (2*i) );
	}
}

{
	let i=0;
	do {
		  console.log(i++);
	} while (i < arrayNumber.length);
}

{
	let i=0;
	while (i < arrayNumber.length) {
		console.log( (2*i++) );
	}
}