//’secret’ specifies the numerical keystrokes that make up the word “mario”
//var secret = "38384040373937396665"; 
var secret = "38";
var secret2 = "40";
var input = "";
var timer;
//The following function sets a timer that checks for user input. You can change the variation in how long the user has to input by changing the number in ‘setTimeout.’ In this case, it’s set for 500 milliseconds or ½ second.
$(document).keyup(function(e) {
   input += e.which; 
   clearTimeout(timer);
   timer = setTimeout(function() { input = ""; }, 800);
   check_input();
   check_input2();
});
//Once the time is up, this function is run to see if the user’s input is the same as the secret code
function check_input() {
    if(input == secret) {
		console.log("Konami Code");
        //the code used to reveal mario and the world is then put here  
		$("body").css("display", "none");
    }
};
function check_input2() {
    if(input == secret2) {
		console.log("Konami Code");
        //the code used to reveal mario and the world is then put here  
		$("body").css("display", "");
    }
};
