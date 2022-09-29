/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/*
 * Permet de récupérer le résultat ainsi que faire la division en cas d'accidents.
 * @returns {undefined}
 */
function Simulateur(){
    let total = new Number();
    let totalSansAccident = new Number(); 
    let nbAccident = recupValeur("#i_nbaccident");
    let nbKmParcouru = recupValeur("#i_nbkmparcouru");
    let nbAncien = recupValeur("#i_anciennete");
    totalSansAccident = get_prime_distance(nbKmParcouru) + get_prime_anciennete(nbAncien);
    if (nbAccident > 3){
        total = 0;
        window.document.querySelector("#resultat_remunsansaccident").innerHTML = "Votre prime sans accident aurait était de : " + totalSansAccident + " €";
    }
    else if (nbAccident === 0){
        total = get_prime_distance(nbKmParcouru) + get_prime_anciennete(nbAncien);
    }
    else{
        total = (get_prime_distance(nbKmParcouru) + get_prime_anciennete(nbAncien)) / get_nb_accident(nbAccident);
        window.document.querySelector("#resultat_remunsansaccident").innerHTML = "Votre prime sans accident aurait était de : " + totalSansAccident + " €";
    }
    window.document.querySelector("#resultat_remun").innerHTML = total + " €";
}

/*
 * Permet d'obtenir la prime d'un routier selon sa distance parcouru.
 */
function get_prime_distance(nbKmParcouru){
    let total = new Number();
    let totalprime = new Number();
    const primeDistance = 0.01;
    const plafondKmParcouru = 900;
    total += nbKmParcouru*primeDistance;
    if (total > plafondKmParcouru){
        return totalprime += plafondKmParcouru;
    }
    else {
        return total;
    }
}

/*
 * Permet d'obtenir la prime d'anciennete d'un routier selon le nombre d'année passer dans l'entreprise.
 */
function get_prime_anciennete(nbAncien){
    let total = new Number();
    const primeAncienneteFixe = 300;
    const primeAjouterAnnee = 30;
    const retirerAnneeDebut = 120;
    if(nbAncien > 4){
        return total += primeAncienneteFixe + nbAncien*primeAjouterAnnee - retirerAnneeDebut;
    }
    else if (nbAncien === 4){
        return total = primeAncienneteFixe;
    }
    else{
        return total += 0;
    }
}

/*
 * Permet d'obtenir le nombre d'accident ainsi que le diviseur sur le total.
 */
function get_nb_accident(nbAccident){
    if (nbAccident === 1){
        return 2;
    }
    else if (nbAccident === 2){
        return 3;
    }
    else if (nbAccident === 3){
        return 4;
    }
}

/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 * 
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}

function test_du_prog(){
    
}

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu_prime").addEventListener("click", Simulateur);
});