
let checked = [];

const list = document.querySelector('ul')
const wishList = document.querySelector('#wishlist');

// añadir a la lista de deseados
list.addEventListener('click',(e)=>{
    const button = e.target;
    const text = button.parentElement.children[0].textContent;
    
        if(!checked.includes(text)){
            let span = document.createElement('span');
            let textSpan = document.createTextNode(text);
            span.appendChild(textSpan);
            
            
            let buttonAdd = document.createElement('button')
            let textButton = document.createTextNode('Borrar');
            buttonAdd.appendChild(textButton)
            
            let li = document.createElement('li');
            li.appendChild(span);
            li.appendChild(buttonAdd)
            wishList.appendChild(li);
        
            button.parentElement.setAttribute("class","color")
            checked.push(text);
        }

});

// borrar de la lista de deseados
wishList.addEventListener('click',(e)=>{
    const button = e.target;
    const text = button.parentElement.children[0].textContent;

    //borrar el color verde (clase de la lista productos)
    for(let i = 0;i<list.children.length;i++){
        if(text == list.children[i].children[0].textContent){
            list.children[i].classList.remove("color");        
        }
    }

    checked.splice(text,1);
    button.parentElement.parentElement.removeChild(button.parentElement)
})

