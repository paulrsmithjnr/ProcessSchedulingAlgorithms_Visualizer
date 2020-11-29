$(document).ready(function() {
    $("main").load("../templates/home.html");
    
    $("#sjf").click(function() {
        event.preventDefault();
        $("main").load("../templates/sjf.html");        
    });

    $("#priority").click(function() {
        event.preventDefault();
        $("main").load("../templates/priority.html");        
    });
});