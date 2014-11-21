//’secret’ specifies the numerical keystrokes that make up the word “mario”
var secret = "848484"; 
var input = "";
var timer;
//The following function sets a timer that checks for user input. You can change the variation in how long the user has to input by changing the number in ‘setTimeout.’ In this case, it’s set for 500 milliseconds or ½ second.
$(document).keyup(function(e) {
   input += e.which;    
   clearTimeout(timer);
   timer = setTimeout(function() { input = ""; }, 500);
   check_input();
});
//Once the time is up, this function is run to see if the user’s input is the same as the secret code
function check_input() {
    if(input == secret) {
		console.log("You pressed t three times.");
        //the code used to reveal mario and the world is then put here           
    }
};
