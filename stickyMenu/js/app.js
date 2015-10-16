/**
 * Created by Awar on 2015-10-16.
 */

$(function(){

    //moze tez $(window).scroll()

    var menu = $("#mainMenu");
    var lastPositionTop = 0;

    $(window).on("scroll", function(){
        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }
        if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
            menu.removeClass("sticky");
        }
    });


});
