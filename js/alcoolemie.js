/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function calculAlcoolemie(){
    let valeurPoids = getInt("#num_poids");
    let valeurVerre = getInt("#num_verre");
    let individuGenre = getString('#sexe input[type="radio"]:checked');
    let valeurAlcoolemie = getAlcoolemie(individuGenre, valeurPoids, valeurVerre);
    let typeSanction = getSanction(valeurAlcoolemie);
    let typeAmende = getAmende(valeurAlcoolemie);
    window.document.querySelector("#resultat_alcoolemie").innerHTML = "Votre taux d'alcoolémie est de : " + getAlcoolemie(individuGenre, valeurPoids, valeurVerre) + " g/l de sang";
    window.document.querySelector("#resultat_amende").innerHTML = typeAmende;
    window.document.querySelector("#resultat_sanction").innerHTML = typeSanction;
}

/**
 * Fonction qui retourne l'alcool pur ingéré en fonction du nombre de verre.
 * 
 * @param {type} nbVerres
 * @returns {Number}
 */
function getAlcoolPur(nbVerres) {
    const uniteAlcool = 10;
    return nbVerres * uniteAlcool;
}

/**
 * Fonction qui retourne le coefficient de diffusion en fonction du sexe.
 * 
 * @param {type} sexe
 * @returns {float}
 */
function getCoefDiffusion(sexe){
    const coefDiffuH = 0.7, coefDiffuF = 0.6;
    if(sexe === 'homme'){
        return coefDiffuH;
    } else {
        return coefDiffuF;
    }
}

/**
 * Fonction qui retourne l'alcoolémie en fonction du sexe, du poids et du nombre de verres ingérés.
 * 
 * @param {string} sexe
 * @param {int} poids
 * @param {int} nbVerres
 * @returns {float}
 */
function getAlcoolemie(sexe, poids, nbVerres){
   // Dans le cas si une divison se fait par 0 (poids = 0)
    if (poids > 0){
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    } else {
        return 0;
    }

}

/**
 * Fonction qui retourne l'amende encourue en fonction de l'alcoolémie.
 * 
 * @param {float} alcoolemie
 * @returns {String}
 */
function getAmende(alcoolemie){
    const seuil = 0.8;
    if(alcoolemie < seuil) {
        return 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €';
    } else {
        return '4500 €';
    }
}

/**
 * Fonction qui retourne la sanction encourue en fonction de l'alcoolémie.
 * 
 * @param {float} alcoolemie
 * @returns {String}
 */
function getSanction(alcoolemie){
    const seuil = 0.8;
    if (alcoolemie < seuil){
        return '6 points + suspension pendant 3 ans';
    } else {
        return '6 points + 2 ans de prison + suspension pendant 3 ans + stage de sensibilisation';
    }
}

/**
 * Fonction qui retourne une valeur entière récupérée via window.document.querySelector(id)
 * 
 * @param {string} id
 * @returns {integer}
 */
function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    }
    else {
        return valeur;
    }
}

/**
 * Fonction qui retourne un string dans le champs via son id.
 * @param {string} id
 * @returns {string}
 */
function getString(id){
    return window.document.querySelector(id).value;
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

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu").addEventListener("click", calculAlcoolemie);
});