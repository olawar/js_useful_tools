/**
 * Created by Awar on 2015-10-16.
 */
$(function(){


    console.log("dziala");

    var paragraphs = $("p");
    var tabs = $(".tabs li");
    var activeParagraph = 0;
    paragraphs.eq(activeParagraph).show();



   //to jest wolniejsze niz CSS paragraphs.load().addClass("displayNone");


    tabs.click(function (event) {
        var order = $(this).data("order");
        if (activeParagraph !== order) {
            paragraphs.eq(activeParagraph).fadeOut(1000, function () {
                paragraphs.eq(order).fadeIn(1000);
                activeParagraph = order;
            });
        }
    });





});