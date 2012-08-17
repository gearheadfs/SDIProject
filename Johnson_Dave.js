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
	upgrade = false,
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


//Object
var currentCharacters = {

	"characters": {
		"character01": {
						"name": "Spyro",
						"element": "Magic",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							};
			
						},
						
		"character02": {
						"name": "Trigger Happy",
						"element": "Tech",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							};
						},
						
		"character03": {
						"name": "Gill Grunt",
						"element": "Water",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							};
						},
						
		"character04": {
						"name": "Prism Break",
						"element": "Earth",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character05": {
						"name": "Terrafin",
						"element": "Earth",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
								if (toUpgrade === this.upgradable) {
								console.log(this.name + " is already level " + this.level + ".");
								} else {
								console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character06": {
						"name": "Boomer",
						"element": "Tech",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character07": {
						"name": "Ghost Roaster",
						"element": "Undead",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character08": {
						"name": "Stealth Elf",
						"element": "Life",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character09": {
						"name": "Sonic Boom",
						"element": "Air",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character10": {
						"name": "Flameslinger",
						"element": "Fire",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
							var toUpgrade = this.upgradable;
							if (toUpgrade === this.upgradable) {
							console.log(this.name + " is already level " + this.level + ".");
							} else {
							console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character11": {
						"name": "Chop Chop",
						"element": "Undead",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
								var toUpgrade = this.upgradable;
								if (toUpgrade === this.upgradable) {
								console.log(this.name + " is already level " + this.level + ".");
								} else {
								console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character12": {
						"name": "Voodood",
						"element": "Magic",
						"level": 10,
						"upgradable": false,
						"upgrade": function () {
								var toUpgrade = this.upgradable;
								if (toUpgrade === this.upgradable) {
								console.log(this.name + " is already level " + this.level + ".");
								} else {
								console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						},
						
		"character13": {
						"name": "Wrecking Ball",
						"element": "Magic",
						"level": 6,
						"upgradable": true,
						"upgrade": function () {
								var toUpgrade = false;
								if (toUpgrade === this.upgrade) {
								console.log(this.name + " is already level " + this.level + ".");
								} else {
								console.log(this.name + " needs to be upgraded to level " + this.level + ".");
							}
						}
					}
				}
			   }
			  }
			 }
			}
		   }
		  }
		 }
		}
	   }	
	  }
	 }
	}
};
console.log(currentCharacters.characters.character01.upgrade());
//currentCharacters.characters.character13.upgrade();
		
			
					
					
						  
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
						allElements = true;
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
			console.log("Gavin's 13 characters consist of " + currentCharacters.characters.character01.name.length + ". Each character belongs to a certain element which there are 8 elements total.");
		if (gavinsChars===true){
			console.log("Gavin's favorite is " + charNames[3] + ".");
		};
		} else {	
			console.log("He wants them all!");
			
		};
		return characters
};
console.log(listOfChar(currentCharacters));

