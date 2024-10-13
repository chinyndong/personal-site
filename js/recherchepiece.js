let icone = document.querySelector(".fa-circle-user");
let profilUtilisateur = document.querySelectorAll('.profil');

icone.addEventListener("click", function (event) {
    profilUtilisateur.forEach(profil => profil.style.display = (profil.style.display === "none" || profil.style.display === "") ? "block" : "none");
    event.stopPropagation();
});

document.addEventListener("click", function () {
    profilUtilisateur.forEach(profil => profil.style.display = "none");
});

profilUtilisateur.forEach(profil => {
    profil.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});



 document.getElementById('rechercherButton').addEventListener('click', function() {
            window.location.href = 'resultatrecherchepiece.html';
        });
    