/**
 * Created by Awar on 2015-10-16.
 */
$(function(){

    var images = $(".slider li");
    var visibleImage = 0;

    //images.eq(visibleImage).show();
    //
    //$(".right").click(function(){
    //    images.eq(visibleImage).hide();
    //    visibleImage++;
    //    if(visibleImage >= images.length){
    //        visibleImage=0;
    //    }
    //    images.eq(visibleImage).show();
    //});
    //
    //$(".left").click(function(){
    //    images.eq(visibleImage).hide();
    //    visibleImage--;
    //    if(visibleImage < 0){
    //        visibleImage=images.length-1;
    //    }
    //    images.eq(visibleImage).show();
    //});


    images.click(function(event){
        images.eq(visibleImage).hide(0);
        if(event.offsetX < $(this).width()/2){
            visibleImage--;
        }
        else{
            visibleImage++;
        }
        if(visibleImage < 0){
            visibleImage=images.length-1;
        }
        if(visibleImage >= images.length){
            visibleImage=0;
        }
        images.eq(visibleImage).show();

        images.eq(visibleImage).hide();
        visibleImage--;
        if(visibleImage < 0){
            visibleImage=images.length-1;
        }
        images.eq(visibleImage).show();
    });








});