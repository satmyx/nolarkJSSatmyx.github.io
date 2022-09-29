/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function Simulateur(){
    let total = new Number();
    total = get_prime_distance(nbKmParcouru) + get_prime_anciennete(nbAncien);
    window.document.querySelector("#resultat_remun").innerHTML = total + " €";
}

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

function get_prime_anciennete(nbAncien){
    let total = new Number();
    const primeAncienneteFixe = 300;
    const primeAjouterAnnee = 30;
    if(nbAncien > 4){
        return total += primeAncienneteFixe + nbAncien*primeAjouterAnnee - 120;
    }
    else if (nbAncien === 4){
        return total = primeAncienneteFixe;
    }
    else{
        return total += 0;
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu_prime").addEventListener("click", Simulateur);
});