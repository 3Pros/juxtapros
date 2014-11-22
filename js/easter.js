//var secret = "38384040373937396665";
var secret1 = "19246";
var secret2 = "1926676656775";
var secret3 = "1926666666666";
var input = "";
var timer;
//The following function sets a timer that checks for user input. You can change the variation in how long the user has to input by changing the number in ‘setTimeout.’ In this case, it’s set for 500 milliseconds or ½ second.
$(document).keyup(function(e) {
   input += e.which; 
   clearTimeout(timer);
   timer = setTimeout(function() { input = ""; }, 800);
   check_input();
   check_input2();
   check_input3();
   console.log(input);
});
//Once the time is up, this function is run to see if the user’s input is the same as the secret code
function check_input() {
    if(input == secret1) {
		console.log("Konami Code");
        //the code used to reveal mario and the world is then put here  
		$("body").toggle("display");
    }
};
function check_input2() {
    if(input == secret2) {
		//console.log("Konami Code, Terry");
        //the code used to reveal mario and the world is then put here 
		$("#jp").text("TURRY BLACK WAS HERE!");
		$("#jp").css({
		fontSize: "150px",
		color: "blue"
		});
		$("#logo3Pros").height("200px");
		$("#logo3Pros").width("300px");
		$("#logo3Pros").css({
		top: "125px",
		left: "300px",
		position: "absolute"
		});
};
};

function check_input3() {
if(input == secret3) {
//later
console.log("yoyoyooyoy");
  }
};









function check_inputX() {
    if(input == secretX) {
    }
};
