const text = document.querySelector('p');
const bigger = document.querySelector('#bigger');
const smaller = document.querySelector('#smaller');

const fonts = document.querySelector('#fonts');

const colorText = document.querySelector('#colorText');

/* añado un px cada vez que se activa */
bigger.addEventListener('click',()=>{
    /* cojo el valor de fuente de la etiquta */
    let elementStyle = window.getComputedStyle(text);
    let elementColor = elementStyle.getPropertyValue('font-size');

    /* la modifico añadiendo un +1 para que aumente 1px por cada click */
    /* 
        \d indica que quiero cojer los números
        /g indica que quiero buscar de manera global en todo el string.
    */
    let regex = /(\d+)/g; 
    let num = elementColor.match(regex);
    text.style.fontSize =  (parseInt(num) + 1) + "px"
})

/* reduce un px cada vez que se activa */
smaller.addEventListener('click',()=>{
    let elementStyle = window.getComputedStyle(text);
    let elementColor = elementStyle.getPropertyValue('font-size');
    
    let regex = /(\d+)/g;
    let num = elementColor.match(regex);
    text.style.fontSize =  (parseInt(num) - 1) + "px"
})


/* Seleccionar fuentes */
fonts.addEventListener('change',()=>{
    /* cogemos el texto de la fuente seleccionada y se la insertamos como nueva fuente al parrafo */
    text.style.fontFamily = fonts.options[fonts.options.selectedIndex].textContent; 

})



/*Cambiar el color de texto aleatorio */
colorText.addEventListener('click',()=>{
    let r, g, b;
    /* aleatoriza cada numero entre 0 y 255 incluidos de cada color rgb */
    min = Math.ceil(0);
    max = Math.floor(255);
        r = Math.floor(Math.random() * (max - min + 1) + min);
        g = Math.floor(Math.random() * (max - min + 1) + min);
        b = Math.floor(Math.random() * (max - min + 1) + min);

    text.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
})