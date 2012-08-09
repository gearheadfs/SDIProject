/* 
Dave Johnson
SDI 1208: Scalable Data & Infrastructures
Assignment: Project 2
*/


var game = "Skylanders: Spyro's Adventure"; //String Global Variable
var characters = 13; //Numeric Global Variable and below are 2 Array Variables
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
						  
function playGameToday(yes,no){
	var play = true;
	if (play===true){
	
	console.log();
	
	} else {
	console.log();						//This is the Procedure step that does not have any function outputted.
	
	};

};

playGameToday();




// Boolean function
if (characters <= 32){
	console.log("Gavin has " + characters + " characters in his collection. They include: " + charNames);
	} else {
	console.log("Keep collecting!");
	
};
function char(){
return "There are 32 total characters"
};


//Number Function
// Gavin currently has 13 out of 32 characters which makes 19 left to go
var charRemain = 19;
	while(charRemain >= 0){
	console.log(charRemain + " characters remain.");
	charRemain--;
	};
