/*
    Hacer una pregunta al usuario
    - el usuario va a responder
    almacenar la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó el mundial Qatar 2022?');

// condicional
if( respuesta.toLowerCase() == 'argentina' ){
    //bloque a ejecutar si la condición es true
    frase.innerHTML = '<img src="imgs/ok.png" style="vertical-align:middle">  ¡CORRECTO!'
}
else{
    //bloque a ejecutar si la condición es false
    frase.innerHTML = '<img src="imgs/error.png" style="vertical-align:middle"> ¡INCORRECTO!'
}