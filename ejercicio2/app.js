const text = document.querySelector('p');
const bigger = document.querySelector('#bigger');
const smaller = document.querySelector('#smaller');

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