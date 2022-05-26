let allCheck=document.body.querySelectorAll('.secondSelect__checkbox');


let secondAllCheck=document.body.querySelectorAll('.amenities__checkbox');

let thirdAllCheck=document.body.querySelectorAll('.amenities__checkboxUnder');

allCheck.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('selected');
        let checkButton= item.querySelector('.secondSelect__inputCh');
        checkButton.setAttribute('checked','checked');
    })
})

secondAllCheck.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('selected');
        let checkButton= item.querySelector('.amenities__inputCh');
        checkButton.setAttribute('checked','checked');
    })
})

thirdAllCheck.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('selected');
        let checkButton= item.querySelector('.amenities__inputChUnder');
        checkButton.setAttribute('checked','checked');
    })
})


