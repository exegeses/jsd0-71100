/*
    motrar fecha actual
    formato:  07/05/2024
*/
// ubicamos elemento dentro del DOM
const frase = document.querySelector('#frase');

// creamos objeto de fecha
const fecha = new Date();
console.log( fecha );

//obtenemos el número de dia de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    //agregamos 0 inicial
    diaMes = '0'+ diaMes;
}
console.log( 'día de mes: ', diaMes );

//obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0'+ mes;
}
console.log( 'mes actual: ', mes );

//obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log( 'año actual: ', anio ); 

// imprimimos la fecha en el span
//versión usando concatenación  + 
    //frase.innerText = diaMes +'/'+ mes +'/'+ anio ;
//versión usando interpolación
frase.innerText = `${diaMes}/${mes}/${anio}`;