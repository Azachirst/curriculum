
$(document).ready(function(){


    $(".invi").hide();
    $("#datos").fadeIn();

    
    $(".opcion1").click(function (e) { 
        $(".invi").hide();
        $("#datos").fadeIn();
        
    });

    $(".opcion2").click(function (e) { 
        $(".invi").hide()
        $("#estudios").fadeIn();
        
    });


    $(".opcion3").click(function (e) { 
        $(".invi").hide()
        $("#habilidades").fadeIn();
        
    });

    $(".opcion4").click(function (e) { 
        $(".invi").hide()
        $("#experiencia").fadeIn();
        
    });

    $(".opcion5").click(function (e) { 
        $(".invi").hide();
        $("#contacto").fadeIn();
        
    });


    });

    $("#exitoso").hide();
    $("#enviar").click(function (e) { 
        $("#exitoso").show();
        
    });

 


