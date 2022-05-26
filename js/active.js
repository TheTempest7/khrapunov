let trigger=document.body.querySelector('.secondSelect__body');


trigger.addEventListener('click',()=>{
    let parent=trigger.parentNode;
    parent.classList.toggle('active');
    console.log(parent);
})