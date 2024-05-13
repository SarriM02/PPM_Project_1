document.addEventListener("DOMContentLoaded", function() {

    // Seleziona l'elemento header
    var header = document.querySelector('#Site_Header');

    // Variabile per tenere traccia della posizione di scorrimento precedente
    var lastScrollY = window.scrollY;

    // Aggiungi un ascoltatore di eventi per l'evento di scorrimento
    window.addEventListener('scroll', function() {

        // Se la posizione di scorrimento è maggiore di 98px e si sta scorrendo verso l'alto, rimuovi la classe 'hide' e aggiungi la classe 'small-header'
        if (window.scrollY > 98 && window.scrollY < lastScrollY) {
            header.classList.remove('hide');
            header.classList.add('small-header');
        } else if (window.scrollY > 98) { // Altrimenti, se la posizione di scorrimento è maggiore di 98px, aggiungi la classe 'hide' e rimuovi la classe 'small-header'
            header.classList.add('hide');
            header.classList.remove('small-header');
        } else { // Altrimenti, rimuovi le classi 'hide' e 'small-header'
            header.classList.remove('hide');
            header.classList.remove('small-header');
        }

        // Aggiorna la posizione di scorrimento precedente
        lastScrollY = window.scrollY;
    });



    window.scrollTo(0, 0);



    window.onscroll = function() {stickyAdv()};

    var advColumn = document.getElementById("Sticky_Image");
    var sticky = advColumn.offsetTop;



    function stickyAdv() {
        if (window.pageYOffset >= sticky) {
            advColumn.classList.add("sticky")
        } else {
            advColumn.classList.remove("sticky");
        }
    }



    window.onload = function() {
        var articlesHeight = document.getElementById('Articles').offsetHeight;
        document.getElementById('Adv_Column').style.height = articlesHeight + 'px';
    }



    var title = document.querySelector('#Site_Title');
    title.addEventListener('click', function() {
        location.reload();
    });

});


