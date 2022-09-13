/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function Simulateur(){
    let nbAncien = parseInt(window.document.querySelector("#i_anciennete").value);
    let nbS20 = parseInt(window.document.querySelector("#i_nbs20").value);
    let total = new Number();
    let total2 = new Number();
    const fixe = 1100;
    const S20 = 140;
    const XSpirit = 350;
    const Multitec = 180;
    if (nbAncien >= 5)
    {
        total += fixe * 1.03;
    }
    else if (nbAncien > 10){
        total += fixe * 1.06;
    }
    total2 = S20*4*0.02;
    alert(total);
    alert(total2);
}

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu").addEventListener("click", Simulateur);
});