//al click della freccia destra l' immagine deve scorrere a quella successiva
var chevronRight = $('.chevron.right');
//console.log(chevronRright);

chevronRight.click(function(){
    //creo variabile per individuare elemento con classe active
    //rimuovo la classe active
    var activeElement = $('.active');
    console.log(activeElement);
    activeElement.removeClass('active');

    var nextElement = activeElement.next();
    //console.log(nextElement);
    nextElement.addClass('active');

});

