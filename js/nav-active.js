$(document).ready(function() {

    var theplace = location.pathname;
    var things = theplace.split("/");
    var filename = things[things.length-1];

    $("a[href*='"+filename+"']").addClass("active");

    //alert(filename);
});
