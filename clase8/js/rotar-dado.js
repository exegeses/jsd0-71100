// ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/* 
    generar un número aleatorio 
    entre 1 y 6 (sin decimales)

    insertar dentro del contenedor #caja 
    una imagen (del dado) que corresponda 
    con el número que acabamos de generar

    reproducir el sonido
*/
// declaramos funciones de control
function generarNumero()
{
    let numeroAleatorio = Math.random();
    // genera un número aleatorio entre 0~1
    console.log( 'nro rand: ', numeroAleatorio );

    let numeroPor5 = numeroAleatorio * 5;
    console.log( 'nro * 5: ', numeroPor5 );

    let numero = Math.round( numeroPor5 );
    console.log( 'numero: ', numero );

    return numero + 1;
}

function mostrarImagen( numero )
{
    //caja.innerHTML = '<img src="red/dice-'+ numero +'.png">';
    caja.innerHTML = `<img src="red/dice-${numero}.png">`;
}

function playAudio()
{
    let sonido = new Audio('audio/dice.mp3');
    sonido.play();
}


boton.addEventListener(
        'click', 
        function()
        {
            let numero = generarNumero();
            mostrarImagen( numero );
            playAudio();
        }
);