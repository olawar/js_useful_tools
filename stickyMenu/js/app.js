/**
 * Created by Awar on 2015-10-16.
 */

$(function(){

    //moze tez $(window).scroll()

    var menu = $("#mainMenu");
    var lastPositionTop = 0;
    var menuHeight = menu.height();

    $(window).on("scroll", function(){
        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
            menu.animate({
                height: (menuHeight/4).toString() + "px"
            }, 500);
        }
        if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
            menu.removeClass("sticky");
            menu.animate({
                height: (menuHeight).toString() + "px"
            }, 500);
        }
    });


});
