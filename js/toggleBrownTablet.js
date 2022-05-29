let allBrownTablets=document.body.querySelectorAll('.underSelect__flex-elem');
console.log(allBrownTablets);

allBrownTablets.forEach(item=>{
    item.addEventListener('click',function(){
        item.classList.toggle('toBrown');
    })
})



let allBrownTablets2=document.body.querySelectorAll('.amenitiesTablets__flex-elem');

allBrownTablets2.forEach(item=>{
    item.addEventListener('click',function(){
        item.classList.toggle('toBrown');
    })
})
