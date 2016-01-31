
'use strict';

/*
	Super complex instructions on how to use this program.
	STEP 1: 
	In your command prompt, go to the folder where you have this file.
	STEP 2: 
	Input the following line to run this high tech program:
	node feedMyMonkey (PUT WHATEVER MONKEY NAME YOU WANT HERE!! GO BANANAS!!!)
	THAT'S IT
*/



// define my monkey
var myMonkeysName = process.argv[2];

function Monkey( name, numberOfBananasOwned ) {

    this.name = name;
    this.stomachContents = [];
    this.numberOfBananasInStash = numberOfBananasOwned;
}

Monkey.prototype.eatBanana = function() {

    this.stomachContents.push( 'banana' );
};

var myMonkey = new Monkey( myMonkeysName, 69 );





// define my interactations with my monkey
function feedMonkeyAllBananas( monkey ) {

	console.log( 'Now feeding', monkey.name + ':' );

	const initialNumberOfBananas = monkey.numberOfBananasInStash;

	for( var i = 1; i <= initialNumberOfBananas; i++ ) {

		monkey.eatBanana();
		monkey.numberOfBananasInStash--;
		console.log( 'Banana consumed,', monkey.numberOfBananasInStash, 'bananas left in banana stash.' );
	}

	console.log( 'All done.' );
	console.log( monkey.name + ' says:', 'Yummy yummy yummy, ookiee ookiee ookiee!!!' );
	console.log( monkey.name + ' says:', 'Thanks for feeding me, I am full!!' );
	console.log( myMonkey.name + ' consumed ' + myMonkey.stomachContents.length.toString() + ' bananas!!' );
}


// feed my monkey
feedMonkeyAllBananas( myMonkey );
