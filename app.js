// on définit un module qui est exécuté une fois le DOM chargé

const app = {
    language: document.getElementsByClassName("language"),

    init: function() {
        // on vérifie que notre module est bien chargé
        console.log("app.init")

        // on pose un capteur sur chaque 'language' du header
        for (eachLanguage of app.language) {
            eachLanguage.addEventListener("click", app.handleClick);
        }
    },

    handleClick: function(event) {
        // si la classe active est présente sur l'un des éléments du header, on la supprime
        for (eachLanguage of app.language) {
            if (eachLanguage.classList.contains("active")) {
                eachLanguage.classList.remove("active");
            }
        }
        // on ajoute la classe active à l'élément cliqué
        this.classList.add("active");        
    }
};

document.addEventListener("DOMContentLoaded", app.init);