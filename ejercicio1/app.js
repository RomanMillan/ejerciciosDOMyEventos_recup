
let checked = [];

const list = document.querySelector('ul')
const wishList = document.querySelector('#wishlist');

// añadir a la lista de deseados
list.addEventListener('click',(e)=>{
    const button = e.target;
    const text = button.parentElement.children[0].textContent;
    
        if(!checked.includes(text)){
            let li = document.createElement('li');
            let info = document.createTextNode(text);
            li.appendChild(info);
        
        
            let buttonAdd = document.createElement('button')
            let textButton = document.createTextNode('Borrar');
            buttonAdd.appendChild(textButton)
            
            li.appendChild(info);
            li.appendChild(buttonAdd)
            wishList.appendChild(li);
        
            button.parentElement.setAttribute("style","color:green")
            checked.push(text);
        }

});

// borrar la lista de deseados
wishList.addEventListener('click',(e)=>{
    const button = e.target;
    const text = button.parentElement.children[0].textContent;
    checked.splice(text,1);
    button.parentElement.parentElement.removeChild(button.parentElement)
})

