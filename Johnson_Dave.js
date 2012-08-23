//Dave Johnson
//SDI 1208
//Assignment 4: Libraries
//August 22, 2012



var myLibrary = function(){
//---------------------------------------------------------------------------

												// Verify Email Address
		var validEmail = function (validate){
			var eCharacters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (eCharacters.test(validate)){
				return true;
				} else {
				return false;
			};
		};
																	
												// End Verify Email Address
//---------------------------------------------------------------------------															
																			
												// Verify Web Address																		
		var validWebAddy = function(validate){
			var wCharacters = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
			if (wCharacters.test(validate)){
				return true;
				} else {
				return false;
			};
		};																			
												// End Verify Web Address	
//---------------------------------------------------------------------------				

												// Verify Telephone
		var validTelly = function(validate){
			var tCharacters = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if (tCharacters.test(validate)){
				return true;
				} else {
				return false;
			};
		};	
												// End Verify Telephone
//---------------------------------------------------------------------------

												// 2 Decimal places
		var currencyDecimal = function(cents){
				return cents.toFixed(2);
		};
												// End 2 Decimal places				
//---------------------------------------------------------------------------	
												//Number of Days between two dates
		var today = function(timeFrame){
				var oneDay = 1000 * 60 * 60 * 24;
				var currentDay = new Date();
				var xmas = new Date(2012, 11, 25);
				console.log(Math.ceil((xmas.getTime() - currentDay.getTime())/(oneDay)) + " days until Christmas!");
			return timeFrame
		};
												// End Number of Days between two dates
//---------------------------------------------------------------------------
												// Given a number as a string, converted to an actual number
		
		var convertString = function(number){
				var changedToNumber = parseFloat();
				return number;
		};


																	
				return {
					"validEmail": validEmail,
					"validWebAddy": validWebAddy,
					"validTelly": validTelly,
					"currencyDecimal": currencyDecimal,
					"today": today,
					"convertString": convertString
				};																						
																			
};

var newLib = new myLibrary();
console.log(newLib.validEmail("http://www.asdfjklsemicolon.com")); // Verify Email Address
console.log(newLib.validWebAddy("asdfjkl@semicolon.com")); // Verify Web Url
console.log(newLib.validTelly("120-987-654three")); // Verify Telephone
console.log("$" + newLib.currencyDecimal(5308.39653) + " is how much I wish I made a week."); // 2 Decimal Places for Currency
console.log(newLib.today(2012, 03, 14)); // Number of Days between two dates
console.log(newLib.convertString("48.13"));