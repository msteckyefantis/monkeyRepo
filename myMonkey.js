'use strict';


// define my monkey

function Monkey( name, numberOfBananasOwned ) {

    this.name = name;
    this.stomachContents = [];
    this.numberOfBananasInStash = numberOfBananasOwned;
}

Monkey.prototype.eatBanana = function() {

    this.stomachContents.push( 'banana' );
};

var myMonkey = new Monkey( 'Banana Nanaz', 69 );



// feed my monkey

function eatAllBananas ( monkey ) {

	for( var i = 1; i <= monkey.numberOfBananasInStash; i++ ) {

		monkey.eatBanana();
	}

	monkey.numberOfBananasInStash = 0;
}

eatAllBananas( myMonkey );



// display my monkey

console.log( 'monkey name:',
	myMonkey.name + ',',
	'number of bananas consumed:',
	myMonkey.stomachContents.length );
