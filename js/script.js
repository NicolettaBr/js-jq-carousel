//al click della freccia destra l' immagine deve scorrere a quella successiva
var chevronRight = $('.chevron.right');
//console.log(chevronRright);

chevronRight.click(function(){
    //creo variabile per individuare elemento con classe active
    //rimuovo la classe active
    var activeElement = $('.active');
    console.log(activeElement);
    activeElement.removeClass('active');

    if(activeElement.hasClass('last')){
        //aggiungo la classe all' elemento con classe first
        $('.first').addClass('active');
    }else{
        //altrimenti individuo con .next elemento successivo e gli aggiungo class active per mostrare elemento 
        var nextElement = activeElement.next();
        //console.log(nextElement);
        nextElement.addClass('active');

    }

});

//al click della freccia sinistra l' immagine deve scorrere a quella precedente
var chevronLeft = $('.chevron.left');
//console.log(chevronLeft);

chevronLeft.click(function(){
    //creo una variabile che individua classe active
    //rimuovo classe active
    var activeElement = $('.active');
    console.log(activeElement);
    activeElement.removeClass('active');
    console.log(activeElement);

    if(activeElement.hasClass('first')){
        //aggiungo la classe all' elemento con classe last
        $('.last').addClass('active');
    }else{
        //individuo con .prev elemento precedente e gli aggiungo class active per mostrare elemento 
        var prevElement = activeElement.prev();
        console.log(prevElement);
        prevElement.addClass('active');
    }


});

