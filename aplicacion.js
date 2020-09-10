$(document).ready(function(){
    var links = $("#links");

    links.mouseenter(function(){

        $(this).fadeTo("fast", 0.3)

        
    });

    links.mouseleave(function(){

        $(this).fadeTo("fast",1)

    });

    $("#titulo").mouseenter(function(){

        $(this).css("background-color", "pink")
    });

    $("#titulo").mouseleave(function(){

        $(this).css("background-color", "green")
    });
    
    $("#boton").click(function(){
        $("#titulo").text("Mi instagram es: @_catacata");
    });

    var escondido = false;

    $("#boton2").click(function(){
        if (escondido == true) {
            escondido = false;
            $("#fotito").show();
            
        }
        else {
            escondido = true;
            $("#fotito").hide();
        }
    });
});