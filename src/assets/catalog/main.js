import color from './base_data/_colors.js';
import gender from './base_data/list_genders.js';
import race from './base_data/step1_races.js';
import clas from './base_data/step2_classes.js';
import past from './base_data/list_backstories.js';


import MY from "./MY.js";
import dic from './texts/dic.js';

//----------------------------------------

// Default language
let lang = "ru";

// --------------------

    function t(x)
{
    return dic[lang][x]
}

function T(x) {
    return dic[lang][x].charAt(0).toUpperCase() + dic[lang][x].slice(1);
}

function TT(x) {
    return dic[lang][x].toUpperCase();
}

function A(x) {
    return x = x || 0
}

//----------------------------------------

// let c = `<div>`;
// for (let i in color) {
//     c = c + `<div>`
//     for (let j in color[i]){
//         c = c +
//         `<div id = "${i} ${j}" style="
//         display:inline-block;
//         background-color:${color[i][j].hex}
//         ;width:80px;height:60px;
//         font-family:Arial;
//         font-size:10px;
//         margin:1px;
//         padding:6px;
//         border-radius:4px;
//         color:${color[0][5].hex};
//         ">
//         ${i} ${j}<br>
//         ${color[i][j].hex}<br>
//         ${T(color[i][j].name)}
//         </div>`}
//     c = c + `</div>`;}
// c = c + `</div>`;

//------------------------------------------


