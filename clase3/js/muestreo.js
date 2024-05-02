// Ubicamos elementos dentro del DOM
    // los almacenamos en constantes
const span = document.querySelector('#span'); 
const div  = document.querySelector('#div');

// document.write(span);
// document.write(span.innerText);
console.log( span );

// escribimos texto dentro del <span>
span.innerText = 'papaya';

// mostramos contenido dentro del <div>
div.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" style="width:256px">';


console.error('este es un mensaje de error que sólo aparece en consola');
console.warn('este es un mensaje de advertencia que sólo aparece en consola');
console.log('utilizamos este mensaje para depurar nuestro código');
console.log('utilizamos este mensaje Para ver qué es lo que está pasando en nuestro código');