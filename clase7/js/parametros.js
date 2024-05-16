const verde = document.querySelector('#verde');
const naranja = document.querySelector('#naranja');
const celeste = document.querySelector('#celeste');
const caja = document.querySelector('#caja');

// declaramos funciones de control
function pintar( codigoColor, nombreColor )
{
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombreColor;
}

verde.addEventListener(
        'mouseover',
        ()=>
        {
            pintar( 'hsl(120, 50%, 60%)', 'Verde' );
        }
);
naranja.addEventListener(
        'mouseover',
        ()=>
        {
            pintar( 'hsl(30, 50%, 60%)', 'Naranja' );
        }
);
celeste.addEventListener(
        'mouseover',
        ()=>{ pintar( 'hsl(180, 50%, 60%)', 'Celeste' ); }
);