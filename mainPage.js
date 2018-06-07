$(document).ready(function(){

    $("#contact_container").hide();
    
 
    $("#info_btn_02").click(function(event){

        $("#contact_container").hide();
        $("#info_container").fadeIn(800);

    });


    $( "#contact_btn" ).click(function( event ) {

        $("#contact_container").slideDown(800);
        $("#info_container").hide();
    });

 });