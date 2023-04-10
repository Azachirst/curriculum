
$(document).ready(function(){
    $("#botonesH").hide();


    $(".invi").hide();
    $("#datos").fadeIn();

    
    $("#opcion1").click(function (e) { 
        $(".invi").fadeOut();
        $("#datos").fadeIn();
        
    });

    $("#opcion2").click(function (e) { 
        $(".invi").fadeOut();
        $("#estudios").fadeIn();
        
    });


    $("#opcion3").click(function (e) { 
        $(".invi").fadeOut();
        $("#habilidades").fadeIn();
        
    });

    $("#opcion4").click(function (e) { 
        $(".invi").fadeOut();
        $("#experiencia").fadeIn();
        
    });

    $("#opcion5").click(function (e) { 
        $(".invi").fadeOut();
        $("#contacto").fadeIn();
        
    });


    });


 


