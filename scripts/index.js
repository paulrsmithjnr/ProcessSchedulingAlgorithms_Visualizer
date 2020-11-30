$(document).ready(function() {
    $("main").load("../templates/home.html");
    
    $("#navbarLogo").click(function() {
        event.preventDefault();
        $("main").load("../templates/home.html");
    });

    $("#sjf").click(function() {
        event.preventDefault();
        $("main").load("../templates/sjf.html");        
    });

    $("#fcfs").click(function() {
        event.preventDefault();
        $("main").load("../templates/fcfs.html");        
    });

    $("#srt").click(function() {
        event.preventDefault();
        $("main").load("../templates/srt.html");        
    });
});