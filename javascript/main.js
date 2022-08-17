document.addEventListener('DOMContentLoaded', function(){

    const overlay1 = document.querySelector('.overlay1');
    const overlay2 = document.querySelector('.overlay2');
    const overlay3 = document.querySelector('.overlay3');
    const overlay4 = document.querySelector('.overlay4');
    const overlay5 = document.querySelector('.overlay5');
    const overlay6 = document.querySelector('.overlay6');

                                    /*  ABRIR MODALS  */
    document.querySelector('.button_depto1').addEventListener('click', function(){
        overlay1.style.opacity = 1;
        overlay1.style.visibility = 'visible';

    })

    document.querySelector('.button_depto2').addEventListener('click', function(){
        overlay2.style.opacity = 1;
        overlay2.style.visibility = 'visible';

    })

    document.querySelector('.button_depto3').addEventListener('click', function(){
        overlay3.style.opacity = 1;
        overlay3.style.visibility = 'visible';

    })

    document.querySelector('.button_depto4').addEventListener('click', function(){
        overlay4.style.opacity = 1;
        overlay4.style.visibility = 'visible';

    })

    document.querySelector('.button_depto5').addEventListener('click', function(){
        overlay5.style.opacity = 1;
        overlay5.style.visibility = 'visible';

    })

    document.querySelector('.button_depto6').addEventListener('click', function(){
        overlay6.style.opacity = 1;
        overlay6.style.visibility = 'visible';
    })

                                    /*  CERRAR MODALS */
    document.querySelector('.button__cerrar1').addEventListener('click', () => {
        overlay1.style.opacity = 0
        overlay1.style.visibility = 'hidden'
    })

    document.querySelector('.button__cerrar2').addEventListener('click', () => {
        overlay2.style.opacity = 0
        overlay2.style.visibility = 'hidden'
    })

    document.querySelector('.button__cerrar3').addEventListener('click', () => {
        overlay3.style.opacity = 0
        overlay3.style.visibility = 'hidden'
    })

    document.querySelector('.button__cerrar4').addEventListener('click', () => {
        overlay4.style.opacity = 0
        overlay4.style.visibility = 'hidden'
    })

    document.querySelector('.button__cerrar5').addEventListener('click', () => {
        overlay5.style.opacity = 0
        overlay5.style.visibility = 'hidden'
    })

    document.querySelector('.button__cerrar6').addEventListener('click', () => {
        overlay6.style.opacity = 0
        overlay6.style.visibility = 'hidden'
    })
})