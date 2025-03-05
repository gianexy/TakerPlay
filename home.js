
// script.js

// Funzione per scrollare fino all'inizio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Effetto di scorrimento fluido
    });
}

// Mostra il pulsante solo se l'utente ha scrollato giù
window.onscroll = function() {
    var button = document.querySelector('.scroll-btn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block"; // Mostra il pulsante
    } else {
        button.style.display = "none"; // Nascondi il pulsante
    }
};
