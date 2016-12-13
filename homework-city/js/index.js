$ ( document ).ready(function() {
//we need an input element, id, value
//we need a button
$("#submit-btn").click(changeBackground);
$("#submit-btn").click(clearForm);
$("submit-btn").click(noSpaces);

//on button click, run a function to change the background based
//on the input
function changeBackground(){
	event.preventDefault();
	
//define that function that runs when the button is clicked
	//get that city name input from the input element
	var cityInput = $("#city-type").val();
	
	//New York, New York City, NYC
	if ( cityInput == "New York City" || cityInput == "NYC" || cityInput == "New York"){
		$("body").attr("class", "nyc");
		$("body").css("background-size" , "cover");
	}	
	else if ( cityInput == "San Francisco" || cityInput == "SF" || cityInput == "Bay Area"){
		$("body").attr("class", "sf");
		$("body").css("background-size", "cover");	
	//SF, San Francisco, Bay Area
	}
	else if( cityInput == "Austin" || cityInput == "ATX"){
		$("body").attr("class", "austin");
		$("body").css("background-size", "cover");
	//Austin, ATX
	}
	else if( cityInput == "Los Angeles" || cityInput == "LA" || cityInput == "LAX"){
		$("body").attr("class", "la");
		$("body").css("background-size", "cover");
	//Los Angeles, LAX
	}	
	else if( cityInput == "Sydney" || cityInput == "SYD"){
		$("body").attr("class", "sydney");
		$("body").css("background-size", "cover");
	}
	//Sydney, SYD
}	
//clear input field after hitting submit
function clearForm(){
	$("#city-type").val("");
}
//prevent spaces used in input field


});
