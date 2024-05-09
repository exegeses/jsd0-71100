//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos funciones de control
function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(30, 50%, 60%)';
    caja.innerText = 'Naranja';
    caja.style.rotate = '30deg';
}
function pintarBlanco()
{
    caja.style.backgroundColor = 'hsl(0, 0%, 100%)';
    caja.innerText = 'Blanco';
    caja.style.rotate = '-50deg';
}
function pintarVerde()
{
    caja.style.backgroundColor = 'hsl(120, 60%, 60%)';
    caja.innerText = 'Verde';
    caja.style.rotate = '60deg';
}