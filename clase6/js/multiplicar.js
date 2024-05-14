//ubicar elementos dentro del DOM
const entrada = document.querySelector('#entrada');
const frase = document.querySelector('#frase');
const factor = document.querySelector('#factor');

//declaramos función de control
function multiplicar()
{
    //capturamos dato ingresado por el usuario en el input
    let datoIngresado = entrada.value;
    //capturamos dato ingresado por el usuario en el combo
    let datoSeleccionado = factor.value;
    
    //multiplicamos
    let resultado = datoIngresado * datoSeleccionado;

    //imprimimos el dato en el span
    frase.innerText = 'resaultado: ' + resultado;
}