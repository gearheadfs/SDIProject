/* 
Dave Johnson
SDI 1208: Scalable Data & Infrastructures
Assignment: Project 2
*/


var gameTitle = "Skylanders: Spyro's Adventure"; //String Global Variable
var gameTitleTF = true;
var charTotal = 32;
var twoPlayers = true;
var gavinsChars = true;
var elementals = true;
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
console.log(playTogether(twoPlayers));
//var returnPlay = playTogether
//console.log(returnPlay(twoPlayers));


//Number function. However I've tried and tried but can't understand why it stops when it hits 22 characters and 10 remaining and then turns the next number, 23, into an actual number. I assume it has to do with the return.		
var charRemain = function(charTotal){
		var currentTotal = 13;
			while(currentTotal <= charTotal){
			console.log("Gavin has " + currentTotal + " characters. " + (charTotal - currentTotal) + " characters remain.");
			currentTotal++;
		};
		return currentTotal
	};
console.log(charRemain(charTotal));	
//var returnTotal = charRemain;
//console.log(returnTotal(charTotal));


//String Function
var game = function(gameTitle){
	var awesome = "This game is awesome!";
	if (gameTitleTF===true){
		console.log("My son's favorite game is " + gameTitle + " and I'll have to admit it is pretty flippin\' sweet!");
	} else {
		console.log("Oh poo, I wish we had " + gameTitle + " because it looks awesome!");
	};
	return awesome
};
console.log(game(gameTitle));
//var returnString = game;
//console.log(returnString(gameTitle));


//Array Function
var listOfChar = function(charNames){
	var listOfElements = elements
		if (elementals===true && gavinsChars===true){
			console.log("Gavin's 13 characters consist of " + charNames + ". Each character belongs to a certain element which there are 8 elements total.");
		if (gavinsChars===true){
			console.log("Gavin's favorite is " + charNames[3] + ".");
		};
		} else {	
			console.log("He wants them all!");
			
		};
		return listOfElements
};
console.log(listOfChar(charNames));
//var returnArray = listOfChar
//console.log(returnArray(charNames));

