console.log("script.js est chargé");
/* 1. on récupère le formulaire grace à son id'document' nous permet de prendre toute la page; getElementById nous oermet de prendre l'élément qui est à cet id
et après on range l'élément trouvé dans la variable formulaire qu'on crée avec const*/
const formulaire= document.getElementById("form-inscription");

/* 2. qd on envoie le formulaire avec le bouton submit, on le réécupère ici. et avec addEventListener, on dit que, qd cet évenement se produit, exécute cette fonction */
formulaire.addEventListener("submit", function (evenement) {
    /*on a besoin de récupérer le formulaire à son envoi. mais par défaut, le navigateur recharge juste la page. donc la commande suivante permet d'interdir cette recharge et nous permet de prendre le contrôle. on décide de quoi faire*/
    evenement.preventDefault();

//on lit ce que la personne a écrit dans chaque case
//.value permet de lire les valeurs
//.trim permet de supprimer l'espace au début et à la fin pour qu'une case vide c'est à dire contenant uniquement de l'espace("  ") ne soit considérée comme pleine
// le tout est récupéré dans les variables créées avec const
    const nom = document.getElementById("nom").value.trim();
    const filiere = document.getElementById("filiere").value.trim();
    const universite = document.getElementById("universite").value.trim();
//mtn on vérifie qu'aucune des cases n'est vide
    if (nom ==="" || filiere ==="" || universite ===""){
        alert("Merci de bien vouloir remplir tous les champs.");
        //alert ouvre une petite case qui permet d'afficher le message
        return;
    }
    alert(`Bienvenue ${nom} ! Inscription en ${filiere} à ${universite} enregistrée.`);
    formulaire.requestFullscreen(); //permet de remettre le formulaire à zéro à la fin de l'inscription
});