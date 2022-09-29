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
    let nbAccident = parseInt(window.document.querySelector("#i_nbaccident").value);
    if (nbAccident > 3){
        total = 0;
    }
    else if (nbAccident === 0){
        total = get_prime_distance() + get_prime_anciennete();
    }
    else{
        total = (get_prime_distance() + get_prime_anciennete()) / get_nb_accident();
    }
    window.document.querySelector("#resultat_remun").innerHTML = total + " €";
}

/*
 * Permet d'obtenir la prime d'un routier selon sa distance parcouru.
 */
function get_prime_distance(){
    let total = new Number();
    let totalprime = new Number();
    let nbKmParcouru = parseInt(window.document.querySelector("#i_nbkmparcouru").value);
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
function get_prime_anciennete(){
    let total = new Number();
    const primeAncienneteFixe = 300;
    const primeAjouterAnnee = 30;
    const retirerAnneeDebut = 120;
    let nbAncien = parseInt(window.document.querySelector("#i_anciennete").value);
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
function get_nb_accident(){
    let nbAccident = parseInt(window.document.querySelector("#i_nbaccident").value);
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

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu_prime").addEventListener("click", Simulateur);
});