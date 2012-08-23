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
				return {
					"validEmail": validEmail,
					"validWebAddy": validWebAddy,
					"validTelly": validTelly,
					"currencyDecimal": currencyDecimal
				};																						
																			
};




var newLib = new myLibrary();
console.log(newLib.validEmail("http://www.asdfjklsemicolon.com")); // Verify Email Address
console.log(newLib.validWebAddy("asdfjkl@semicolon.com")); // Verify Web Url
console.log(newLib.validTelly("120-987-654three")); // Verify Telephone
console.log("$" + newLib.currencyDecimal(5308.39653) + " is how much I wish I made a week.");