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












/* 
탭을 클릭하면 해당 탭에 tab--selected라는 클래스명을 주고 tab--rest를 제외한 다른 탭들에는 tab--default라는 클래스를 준다. 

클릭된 탭과 같은 순서를 가진 tab---cont의 display속성을 block으로 한다. 



*/

