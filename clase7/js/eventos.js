//ubicar elemnto dentro del DOM
const frase = document.querySelector('#frase');
const boton = document.querySelector('#boton');

//boton.addEventListener( 'evento', acción );
boton.addEventListener(
        'click',
        function()
        {
            frase.innerText = 'hiciste click';
        }    
);
boton.addEventListener(
        'mouseover',
        function()
        {
            frase.innerText = 'mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        function()
        {
            frase.innerText = 'mouse fuera';
        }
);