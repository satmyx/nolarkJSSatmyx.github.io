/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
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