/* ============================================
 ui 아코디언
 ============================================== */
let uititles = document.querySelectorAll('.uititle');
let uiconts = document.querySelectorAll('.uicont');
let uiarrows = document.querySelectorAll('.chevronIcon.ui');


uititles.forEach((title,idx)=>{
    title.addEventListener('click',function(){
        let clkCont = title.nextElementSibling;
        let arrow =  title.children[1];

        let isOpen = clkCont.classList.contains('db');

       

         //class 초기화
        uiconts.forEach(c=>c.classList.remove('db')) 
        uititles.forEach(t => t.children[1].classList.remove('rotate180'))



         if(!isOpen){
            clkCont.classList.add('db');
            arrow.classList.add('rotate180');
        }  



    })
})




/* ============================================
topbtn
 ============================================== */

let topbtn = document.querySelector('#topBtn');

window.addEventListener('scroll',(e)=>{
    let vh20 = window.innerHeight *0.2;

    if(window.scrollY < vh20){
        topbtn.classList.remove('db');
    } else{
        topbtn.classList.add('db');
    }
})

topbtn.addEventListener('click',(e)=>{
   window.scrollTo({
    top:0,
    behavior:'smooth'
   })
})





/* ============================================
 tab
 ============================================== */
let tabs = document.querySelectorAll('.tab--btn');
let tabConts = document.querySelectorAll('.tab--cont');

tabs.forEach((tab,idx) => {
    
    tab.addEventListener('click', function(){
        tabs.forEach((t)=>{
            t.classList.remove('tab--selected');
            t.classList.add('tab--default');
        });
        this.classList.add('tab--selected');
        this.classList.remove('tab--default');

        tabConts.forEach((c)=>{
            c.classList.remove('db');
            c.classList.add('dn');
        });
        tabConts[idx].classList.remove('dn');
        tabConts[idx].classList.add('db');
    });
});


/* ============================================
btnset
 ============================================== */
const rootStyle = document.documentElement.style;

let currentFZ = 1.6;
let textFZ = 16;


/* 폰트크기조절 */
document.querySelector('.btn--fzup').addEventListener('click',()=>{
    if(currentFZ <2){
        textFZ +=1;
        document.querySelector('.btn--fznow').textContent = textFZ + 'px';

        currentFZ = textFZ * 0.1;
        currentFZ=currentFZ.toFixed(1);
        rootStyle.setProperty('--default-fz', currentFZ);

        
        document.querySelector('.btn--fzdn').classList.remove('btn__disable');
    } 
    if(currentFZ >= 2){
        document.querySelector('.btn--fzup').classList.add('btn__disable');
    }
})

document.querySelector('.btn--fzdn').addEventListener('click',()=>{
    if(currentFZ > 1 ){
        textFZ -=1;
        document.querySelector('.btn--fznow').textContent = textFZ + 'px';

        currentFZ = textFZ * 0.1;
        currentFZ=currentFZ.toFixed(1)
        rootStyle.setProperty('--default-fz', currentFZ);

    
        document.querySelector('.btn--fzup').classList.remove('btn__disable');
    } 
    if(currentFZ <= 1){
        document.querySelector('.btn--fzdn').classList.add('btn__disable');
    }
})


/* 흑백모드 */
document.querySelector('.btn--whiteMode').addEventListener('click',()=>{
    rootStyle.setProperty('background', 'transparent');

    rootStyle.setProperty('--color-default', '#111');
    rootStyle.setProperty('--color-second', '#333');
    rootStyle.setProperty('--color-disable', '#777');
    rootStyle.setProperty('--color-light-gray1', '#f1f1f1');
    rootStyle.setProperty('--color-light-gray2', '#dedede');
})

document.querySelector('.btn--darkMode').addEventListener('click',()=>{
    rootStyle.setProperty('background', '#111');

    rootStyle.setProperty('--color-default', '#fff');
    rootStyle.setProperty('--color-second', '#eee');
    rootStyle.setProperty('--color-disable', '#aaa');
    rootStyle.setProperty('--color-light-gray1', '#444');
    rootStyle.setProperty('--color-light-gray2', '#333');
})

/* 드롭다운 */
const dropBtn = document.querySelector('button.drop');
const dropBox = document.querySelector('.drop--box');
const dropList = document.querySelectorAll('.drop--box>li>a');


dropBtn.addEventListener('click',()=>{
     let isOpen = dropBox.parentElement.classList.contains('db');
   
    if(isOpen){
        dropBtn.childNodes[3].classList.remove('rotate180');
        dropBox.parentElement.classList.remove('db');
    } else{
        dropBtn.childNodes[3].classList.add('rotate180');
        dropBox.parentElement.classList.add('db');
    }
})

dropList.forEach(function(liA,i){
    liA.addEventListener('click',function(){
        dropList.forEach(a => a.classList.remove('cked'));

        dropBtn.childNodes[1].textContent = this.textContent;  
        
        dropBtn.childNodes[3].classList.remove('rotate180');
        dropBox.parentElement.classList.remove('db');

        this.classList.add('cked');
    })
})

console.log(dropList)