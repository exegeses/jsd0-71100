//ubicamos elementos dentro del DOM
const propiedad = document.querySelector('#propiedad');
const ubicacion = document.querySelector('#ubicacion');
const metros2 = document.querySelector('#metros2');

//declaramos función de control
function calcular()
{
    //capturamos opciones seleccionadas por el usuario
    let tipoPropiedad = propiedad.value;
    let tipoUbicacion = ubicacion.value;
    let valorM2 = metros2.value;

    console.log('tp: ', tipoPropiedad)
    console.log('tu: ', tipoUbicacion)
    console.log('vm2: ', valorM2)
}