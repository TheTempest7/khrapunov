let allCheck=document.body.querySelectorAll('.secondSelect__checkbox');
console.log(allCheck);

let secondAllCheck=document.body.querySelectorAll('.amenities__checkbox')

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


