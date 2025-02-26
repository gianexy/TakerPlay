document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il refresh della pagina

    // Mostra il messaggio di accesso riuscito
    document.getElementById("successMessage").style.display = "block";

    // Dopo 2 secondi, reindirizza l'utente alla homepage
    setTimeout(() => {
        window.location.href = "index.html"; // Cambia URL se necessario
    }, 2000);
});
