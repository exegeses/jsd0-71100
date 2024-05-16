// ubicam9os elementos dentro del DOM
const btnRedbull = document.querySelector('#btnRedbull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnAMartin = document.querySelector('#btnAMartin');
const btnMercedes = document.querySelector('#btnMercedes');

const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

/*
        estado inicial
        Se tiene que ver 1 (un) solo div 
        por lo tanto vamos a ocultar tres de ellos
*/
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

/* Mostrar la escudería que corresponda al hacer clic en cada botón */

btnRedbull.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);

btnFerrari.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'flex';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnAMartin.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'flex';
            mercedes.style.display = 'none';
        }
);
btnMercedes.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'flex';
        }
);
