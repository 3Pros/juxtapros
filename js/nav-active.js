$(document).ready(function() {

    var theplace = location.pathname;
    var things = theplace.split("/");
    var filename = things[things.length-1];


    alert(filename);
});