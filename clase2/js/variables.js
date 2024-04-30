/*
    Para declarar variables en Javascript 
    utilizamos la palabra reservada "let"
*/
let numero = 73;
let frase = 'hola mundo';
/*
    Para declarar constantes en Javascript 
    utilizamos la palabra reservada "const"
*/
const curso = 'Javascript desde 0';


// Imprimimos valor de nuestras variables en el documento
document.write( numero );
document.write('<br>');
document.write( frase );
document.write('<br>');
// Sobre escribimos el valor de la variable frase
frase = 'nuevo texto';

document.write( frase );
document.write('<br>');

// imprimimos el valor de nuestra constante
document.write( curso );
// No se puede sobre escribir una constante
curso = 'hola';
document.write( curso );
