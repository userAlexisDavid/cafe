//voy a decirle que se ejecute una vez que se haya cargado todo el documento HTML
$(document).ready(function(){
    //efecto menu

    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top': '-200px'
        })
        $(this).animate({
           top:'0' 
        }, 2000+ (index * 500));
    })

})