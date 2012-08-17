/* 
Dave Johnson
SDI 1208: Scalable Data & Infrastructures
Assignment: Project 3
08/14/2012
*/


var gameTitle = "Skylanders: Spyro's Adventure", //String Global Variable
	gameTitleTF = true,
	charTotal = 32,
	twoPlayers = true,
	gavinsChars = true,
	elementals = true,
	currentCharacters = ["Spyro",
						 "Trigger Happy",
						 "Gill Grunt",
						 "Prism Break",
						 "Terrafin",
						 "Boomer",
						 "Ghost Roaster",
						 "Stealth Elf",
						 "Sonic Boom",
						 "Flameslinger",
						 "Chop Chop",
						 "Voodood",
						 "Wrecking Ball"
						 ];
	;


//Object

var characters = {
    	charName: "Spyro",
    	element: "Magic",
    	level:       ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
    	upgradable: false,
    	upgrade: function () {
    	console.log("Already level " + level[9] + ".");
    	},
    
};
	var key = "charName";
	console.log(characters[key]);
		console.log(characters.charName, characters.element, characters.level[9]);
					
					
					
					
						  
//New Procedure
var play = function(){
	console.log("Gavin, do you want to play today? Because I want to play as a " + charElements.flameslinger + ".");

};


//New Boolean function. Added an additional nested conditional
var wannaPlay = function(twoPlayers){
		var playAlone = false;
		var allElements = false;
		if ((wannaPlay || twoPlayers===true) && (wannaPlay != twoPlayers)){
			playAlone = true;
/* Nested Conditional*/	if (allElements === false){
						allElements = false;
						} else {
						llElements = true;
		}; 
		} else {
			playAlone = true;
		};
return allElements;
};
console.log(wannaPlay());



//New Number function. Fixed Countdown/Math problem and added a new number
var charRemain = function(charTotal){
		var currentTotal = 13;
		var	highestLevel = 10;
			while(currentTotal <= charTotal){
			console.log("Gavin has " + currentTotal + " characters. " + (charTotal - currentTotal) + " characters remain.");
			currentTotal++;
		};
		console.log("The highest level each character can achieve is " + highestLevel + ".");
		return currentTotal
		};
var allCharacters = charRemain(charTotal);	



//New String Function
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



//Array Function
var listOfChar = function(charNames){
	var characters = currentCharacters
		if (elementals===true && gavinsChars===true){
			console.log("Gavin's 13 characters consist of " + charNames + ". Each character belongs to a certain element which there are 8 elements total.");
		if (gavinsChars===true){
			console.log("Gavin's favorite is " + charNames[3] + ".");
		};
		} else {	
			console.log("He wants them all!");
			
		};
		return currentCharacters
};
console.log(listOfChar(currentCharacters));

