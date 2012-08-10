/* 
Dave Johnson
SDI 1208: Scalable Data & Infrastructures
Assignment: Project 2
*/


var game = "Skylanders: Spyro's Adventure"; //String Global Variable
var charTotal = 32;
var twoPlayers = true;
var charNames = new Array ("Spyro", 
						   "Gill Grunt", 
						   "Trigger Happy", 
						   "Ghost Roaster",
						   "Chop Chop", 
						   "Voodood",
						   "Stealth Elf", 
						   "Flameslinger",
						   "Prism Break",
						   "Terrafin",
						   "Sonic Boom",
						   "Wrecking Ball",
						   "Boomer");
var elements = new Array ("Air",
						  "Life",
						  "Earth",
						  "Fire",
						  "Undead",
						  "Water",
						  "Magic",
						  "Tech");


		  
						  
//Procedure
var play = function(playToday){
	if (playToday===true){
	console.log("Let's start playing!");
		} else {
	console.log("Maybe we can play tomorrow.");
	};

};


// Boolean function
var playTogether = function(twoPlayers){
		var playAlone = false
		if ((playTogether || twoPlayers===true) && (playTogether !=twoPlayers)){
			playAlone = false;
		} else {
			playAlone = true;
		};
return playAlone;
};

var returnPlay = playTogether
console.log(returnPlay(twoPlayers));


//Number function. However I've tried and tried but can't understand why it stops when it hits 22 characters and 10 remaining and then turns the next number, 23, into an actual number.		
var charRemain = function(charTotal){
		var currentTotal = 13;
			while(currentTotal < charTotal){
			console.log("Gavin has " + currentTotal + " characters. " + (charTotal - 13) + " characters remain.");
			currentTotal++;
			charTotal--;
		};
		return currentTotal
	};
	
var returnTotal = charRemain;
console.log(returnTotal(charTotal));


//String Function




