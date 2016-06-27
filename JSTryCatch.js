function tryCatch(ifException){
	try{
		if( ifException )
			throw "myException"; 
		else
			console.log( 'if exception == '+ifException );
	}catch(e){
		console.log( e );
	}finally{
		console.log( 'call finally!!' );
	}
}

tryCatch( false );
tryCatch( true );
tryCatch( false );