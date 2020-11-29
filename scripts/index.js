$(document).ready(function() {
    $("main").load("../templates/home.html");
    
    $("#sjf").click(function() {
        event.preventDefault();
        $("main").load("../templates/sjf.html");        
    });

    $("#srtf").click(function() {
        event.preventDefault();
        $("main").load("../templates/srtf.html");        
    });
});