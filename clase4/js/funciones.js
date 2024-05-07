//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos funciones de control
function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(30, 50%, 60%)';
    caja.innerText = 'Naranja';
    caja.style.rotate = '30deg';
}