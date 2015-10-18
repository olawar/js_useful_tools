/**
 * Created by Awar on 2015-10-16.
 */
$(function(){

    var images = $(".slider li");
    var visibleImage = 0;

    images.eq(visibleImage).show();

    $(".right").click(function(){
        images.eq(visibleImage).hide();
        visibleImage++;
        if(visibleImage >= images.length){
            visibleImage=0;
        }
        images.eq(visibleImage).show();
    });

    $(".left").click(function(){
        images.eq(visibleImage).hide();
        visibleImage--;
        if(visibleImage < 0){
            visibleImage=images.length-1;
        }
        images.eq(visibleImage).show();
    });









});