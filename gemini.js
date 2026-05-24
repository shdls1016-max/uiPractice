let list = document.querySelector('#todo-list');

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('del-btn')){
        let li = e.target.parentElememt;
        li.remove();
    }
})