//ubicamos elemento dentro del DOM
const caja = document.querySelector('#frase');

/*
   mostrar un reloj digital
   formato:  09:41:26
 */

//declaramos función de control
function reloj()
{
    //creamos objeto de fecha
    const fecha = new Date();

    //obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    console.log( 'horas:', horas );

    //obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    console.log('minutos:', minutos);

    //obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    console.log('segundos:', segundos);

    //imprimimos en el span el reloj
    //frase.innerText = `${horas}:${minutos}:${segundos}`;
    frase.innerText = horas +':'+ minutos +':'+ segundos;
}
// invocamos la función reloj()
reloj();
// actualizamos el llamado a la función reloj
setInterval( reloj, 1000 );