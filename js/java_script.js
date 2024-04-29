//voy a decirle que se ejecute una vez que se haya cargado todo el documento HTML
$(document).ready(function () {
    //efecto menu

    $('.menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));

    });

    if ($(window).width() > 800){
         $('header .texto').Css({
          opacity: 0,
          marginTop: 0
        });

        $('header .texto').animate({
            opacity: 1,
            marginTop: '-52px'
        },1500);
    }
    //Sccroll Elementos de menu
    var cacercaDe =$('#acerca-de').offset(),
        menu = $('#paltillos').offset(),
        galeria = $('#galeria').offset(),
        ubicacion = $('#ubicacion') .off();
    $('#btn.acerca-de').on('click', function(e){
        e. preventDefault();
        $('html , body').animate({
            scrollTop: acercaDe - 100
        } , 500);
        
    });
})