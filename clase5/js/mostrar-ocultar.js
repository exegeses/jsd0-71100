//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos funciones de control
function ocultar()
{
    //caja.style.visibility = 'hidden';
    caja.style.opacity = '0';
    //caja.style.display = 'none';
}
function mostrar()
{
    //caja.style.visibility = 'visible';
    caja.style.opacity = '1';
    //caja.style.display = 'block';
}
function mostrarOcultar()
{
    // si (la caja se ve)
    if( caja.style.opacity == '1' ){
        //ocultamos la caja
        ocultar();
    }
    else{
        //mostramos la caja
        mostrar();
    }
}