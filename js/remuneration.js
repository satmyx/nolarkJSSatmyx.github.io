/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function Simulateur(){
    let nbAncien = parseInt(window.document.querySelector("#i_anciennete").value);
    let nbS20 = parseInt(window.document.querySelector("#i_nbs20").value);
    let nbXSpirit = parseInt(window.document.querySelector("#i_nbxspirit").value);
    let nbMultitec = parseInt(window.document.querySelector("#i_nbmultitec").value);
    let total = new Number();
    const fixe = 1100;
    const S20 = 140;
    const xspirit = 350;
    const Multitec = 180;
    if (nbAncien >= 10)
    {
        total += fixe * 1.06;
    }
    else if (nbAncien >= 5){
        total += fixe * 1.03;
    }
    else {
        total += fixe;
    }
    total = total + S20*nbS20*0.02;
    if (nbXSpirit > 50)
    {
        total += xspirit*0.06;
    }
    if(nbMultitec >= 51){
        total = total + Multitec*nbMultitec*0.10;
    }
    else if(nbMultitec >= 21){
        total = total + Multitec*nbMultitec*0.06;
    }
    else if (nbMultitec <= 20){
        total = total + Multitec*nbMultitec*0.04;
    }
    
    alert(total);
}

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer_simu").addEventListener("click", Simulateur);
});