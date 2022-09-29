/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/*
 * Regroupe les méhodes afin de récupérer le total.
 * @returns {undefined}
 */

function Simulateur(){
    let total = new Number();
    total = get_salaire_ancien() + get_salaire_s20() + get_salaire_xspirit() + get_salaire_multitec() + get_km_rembourser();
    window.document.querySelector("#resultat_remun").innerHTML = total + " €";
}

/*
 * Permet d'obtenir le salaire selon l'ancienneté.
 * @returns {Number}
 */
function get_salaire_ancien(){
    let total = new Number();
    let nbAncien = parseInt(window.document.querySelector("#i_anciennete").value);
    const fixe = 1100;
    const TauxAncien1 = 1.03;
    const TauxAncien2 = 1.06
    if (nbAncien >= 10)
    {
        total += fixe * TauxAncien2;
    }
    else if (nbAncien >= 5){
        total += fixe * TauxAncien1;
    }
    else {
        total += fixe;
    }
    return total;
}

/*
 * Permet d'obtenir le salaire des ventes du S20.
 */
function get_salaire_s20(){
    let total = new Number();
    let nbS20 = parseInt(window.document.querySelector("#i_nbs20").value);
    const TauxXspirit = 0.02;
    const S20 = 140;
    return total = total + S20*nbS20*TauxXspirit;
}

/*
 *  Permet d'obtenir les salaires selon le nombre de XSpirit.
 */
function get_salaire_xspirit(){
    let total = new Number();
    const xspirit = 350;
    let nbXSpirit = parseInt(window.document.querySelector("#i_nbxspirit").value);
    if (nbXSpirit > 50)
    {
        return total += xspirit*0.06;
    }
    else{
        return total;
    }
}

/*
 * Permet d'obtenir les salaires selon le nombre de multitec vendu.
 */
function get_salaire_multitec(){
    let total = new Number();
    let nbMultitec = parseInt(window.document.querySelector("#i_nbmultitec").value);
    const Multitec = 180;
    const TauxMulti1 = 0.04;
    const TauxMulti2 = 0.06;
    const TauxMulti3 = 0.10;
    if(nbMultitec >= 51){
        return total = total + Multitec*nbMultitec*TauxMulti3;
    }
    else if(nbMultitec >= 21){
        return total = total + Multitec*nbMultitec*TauxMulti2;
    }
    else if (nbMultitec <= 20){
        return total = total + Multitec*nbMultitec*TauxMulti1;
    }
}

/*
 * Permet d'obtenir l'indemnité des km parcouru.
 */
function get_km_rembourser(){
    let total = new Number();
    const indemnite = 0.15;
    let nbKmParcouru = parseInt(window.document.querySelector("#i_nbkmparcouru").value);
    total += nbKmParcouru*indemnite;
    if (total > 350){
        return total = 350;
    }
    else{
        return total;
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu").addEventListener("click", Simulateur);
});