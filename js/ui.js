import {uititles, uiconts, uiarrows, topbtn, tabs, tabConts, rootStyle, dropBtn, dropBox, dropList, popoverBtn, popoverMenu, modalBtn, modal, modalClose, modalWindow, blockScroll, menuBtn, hiddenFloat, hiddenFloatIndi, tooltip, form, searchBox, searchBoxInput, valueDelete, recentsBox, ul, today, month, day, date} from "./element.js"


/* ============================================
 ui 아코디언
 ============================================== */
let alertTimer = null;   //5번째 아코디언 탭(툴팁...)안에 있는 안내문 위해

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

        if(uiconts[4].classList.contains('db')){     //툴팁아코디언 열때마다 안내문 뜨게
            if(alertTimer){clearTimeout(alertTimer);}
            document.querySelector('.alert5').parentElement.classList.remove('dn');

            alertTimer = setTimeout(()=>{
                document.querySelector('.alert5').parentElement.classList.add('dn');
                alertTimer = null;
                }, 5000);
        } else {
            if(alertTimer){
                clearTimeout(alertTimer);
                alertTimer = null;
            }
            document.querySelector('.alert5').parentElement.classList.add('dn');
        }

    })
})




/* ============================================
topbtn
 ============================================== */

window.addEventListener('scroll',(e)=>{
    let vh20 = window.innerHeight *0.1;    /* 0.2 곱하는 거에서 줄임 */

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
    rootStyle.setProperty('--color-third', '#555');
    rootStyle.setProperty('--color-disable', '#777');
    rootStyle.setProperty('--color-light-gray1', '#f1f1f1');
    rootStyle.setProperty('--color-light-gray2', '#dedede');
    rootStyle.setProperty('--color-light-gray3', '#ccc');
    rootStyle.setProperty('--colorwhite', '#fff');

    rootStyle.setProperty('--color-point-default', 'rgb(145, 209, 206)');
    rootStyle.setProperty('--color-point-hover', 'rgb(163, 227, 224)');

})

document.querySelector('.btn--darkMode').addEventListener('click',()=>{
    rootStyle.setProperty('background', '#111');

    rootStyle.setProperty('--color-default', '#fff');
    rootStyle.setProperty('--color-second', '#eee');
    rootStyle.setProperty('--color-third', '#ccc');
    rootStyle.setProperty('--color-disable', '#aaa');
    rootStyle.setProperty('--color-light-gray1', '#444');
    rootStyle.setProperty('--color-light-gray2', '#333');
    rootStyle.setProperty('--color-light-gray3', '#313131');
    rootStyle.setProperty('--color-white', '#111');

    rootStyle.setProperty('--color-point-default', 'rgb(57, 79, 78)');
    rootStyle.setProperty('--color-point-hover', 'rgb(84, 108, 107)');
})

{/* 드롭다운 */
~
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

document.addEventListener('keydown', (e)=>{     //esc 키 누르면 드롭다운 닫히게
    if(e.key === 'Escape'){
        dropBtn.childNodes[3].classList.remove('rotate180');
        dropBox.parentElement.classList.remove('db');
    }
})

uiconts[2].addEventListener('click', (e)=>{    //배경누르면 닫히게

    if(!dropBox.contains(e.target) && !dropBtn.contains(e.target)){
        dropBtn.childNodes[3].classList.remove('rotate180');
        dropBox.parentElement.classList.remove('db');
    }

})

}


{/* 툴팁 */
tooltip.children[0].addEventListener('click', (e)=>{
    e.stopPropagation();

    tooltip.classList.toggle('active');
});


document.addEventListener('click', (e)=>{
    
    if(tooltip.classList.contains('active') && !tooltip.children[1].contains(e.target)){
        tooltip.classList.remove('active');
    }
    
});

}





{/* 팝오버 */

popoverBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    
    popoverMenu.classList.toggle('opacity1');

    if (popoverMenu.classList.contains('opacity1')) {
        popoverBtn.style.background = 'rgba(150, 150, 150, 0.8)';
    } else {
        popoverBtn.style.background = 'rgba(150, 150, 150, 0.2)';
    }
});

uiconts[4].addEventListener('click', function(e) {
    let clickedElement = e.target;
    
    if (popoverMenu.classList.contains('opacity1') && !popoverMenu.contains(clickedElement)) {
        popoverMenu.classList.remove('opacity1');
        popoverBtn.style.background = 'rgba(150, 150, 150, 0.2)';
    }
});

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        popoverMenu.classList.remove('opacity1');
        popoverBtn.style.background = 'rgba(150, 150, 150, 0.2)';
    }
})

}

{/* 모달 */

modalBtn.addEventListener('click',(e)=>{  //클래스 존재여부확인후 있으면 클래스 없애고 없으면 클래스 붙이기
    e.stopPropagation();

    modal.classList.toggle('db');

    window.addEventListener('wheel', blockScroll, {passive:false});
    window.addEventListener('touchmove', blockScroll, {passive:false});
});

 modal.addEventListener('click', (e)=>{   //모달 배경클릭시 닫기
        if(e.target === modal){
            modal.classList.remove('db');
        }

        window.removeEventListener('wheel', blockScroll);
        window.removeEventListener('touchmove', blockScroll);
    });

modalClose.addEventListener('click', ()=>{  //닫기아이콘 클릭시 모달닫기
    modal.classList.remove('db');

    window.removeEventListener('wheel', blockScroll);
    window.removeEventListener('touchmove', blockScroll);
})


document.querySelectorAll('.modal--inner-btn')[0].addEventListener('click', ()=>{   //no버튼 누르면 모달닫기
    modal.classList.remove('db');

    window.removeEventListener('wheel', blockScroll);
    window.removeEventListener('touchmove', blockScroll);
})

document.addEventListener('keydown', (e)=>{   //esc 키 누르면 모달 닫기
    if(e.key === 'Escape'){
        modal.classList.remove('db');

        window.removeEventListener('wheel', blockScroll);
        window.removeEventListener('touchmove', blockScroll);
    }
});

}

{/* 인풋 */


let searchLists= [];
let num = 1;    //list 고유번호 id 값


const addLi = (searchList) => {
    let addLi = document.createElement('li');
    let addLog = document.createElement('span');
    let addDate = document.createElement('small');
    let addClose = document.createElement('div');
    let addright = document.createElement('div');
    

    /* addClose.appendChild(document.createElement('span')) */
    addright.setAttribute('class', 'right');
    addLi.setAttribute('id', searchList.id)
    addright.appendChild(addDate);
    addright.appendChild(addClose);

    addLog.textContent = searchList.txt;
    addDate.textContent = date;

    addLi.appendChild(addLog);
    addLi.appendChild(addright);
   

    ul.prepend(addLi);

}

const makeSearchList = (log)=>{
    if(log !== ''){    //li가 총 10까지만 유지되게 기능 추가하기 (초기화하면 num값도 초기화)
            let searchList = {
                id: num++,
                txt: log,
                date: '0606',
            }

            searchLists.push(searchList);
            addLi(searchList);
            localStorage.setItem('searchLists', JSON.stringify(searchLists));
            console.log(searchLists)
        }
        
        searchBoxInput.value = '';
}


/* --------------------------------- 변수/함수 정의부분 분리 ---------------------------------------- */

if(localStorage.getItem('searchLists') === null){
    localStorage.setItem('searchLists', JSON.stringify(searchLists));
    
} else {
    let usersearchlog = JSON.parse(localStorage.getItem('searchLists'));

    usersearchlog.forEach((searchList)=>{
    addLi(searchList);
    })

    searchLists = usersearchlog;
};






form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

searchBoxInput.addEventListener('keydown', (e)=>{
    if(e.isComposing) return;  //isComposing 은 t/f 반환, 한글 중복입력방지용이고 선택사항이라고 함
    if(e.key === 'Enter'){
        let log = searchBoxInput.value;

        makeSearchList(log);
    }
})

console.log('')






/* 검색창 형태변화 */
searchBoxInput.addEventListener('click', (e)=>{
    e.target.setAttribute('placeholder','검색어를 입력해주세요');

});   

document.addEventListener('click', (e)=>{
    if(!searchBox.contains(e.target)){
        searchBoxInput.removeAttribute('placeholder');

        searchBox.classList.remove('active');
        recentsBox.classList.remove('db');
    }  //입력창아닌 부분 클릭하면 플레이스홀더 안 보이게 + 검색창 모양 다시 원래대로
    
})   

searchBoxInput.addEventListener('input', ()=>{
    let value = searchBoxInput.value;

    if(value){
        valueDelete.classList.add('db');
        searchBox.classList.add('active');
        recentsBox.classList.add('db');

        
    } else {
        valueDelete.classList.remove('db');
        document.addEventListener('click', ()=>{
            searchBox.classList.remove('active');
            recentsBox.classList.remove('db');
        });
        
    }
});    //입력창에 입력값있으면 X아이콘 보이고 없으면 안 보이게

searchBoxInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
        searchBox.classList.remove('active');
        recentsBox.classList.remove('db');
    }
})   //검색창에서 esc 키 누르면 형태변화

valueDelete.addEventListener('click', (e)=>{
    searchBoxInput.value = '';
    searchBoxInput.removeAttribute('placeholder');
    valueDelete.classList.remove('db');

})   //검색창의 X아이콘 누르면 타이핑 내용지우기






}










{//floating btn

const hidefloat = ()=>{   
    hiddenFloatIndi[2].classList.remove('float-ani');
    setTimeout(()=>{hiddenFloatIndi[1].classList.remove('float-ani');},100);
    setTimeout(()=>{hiddenFloatIndi[0].classList.remove('float-ani');},200);
}



menuBtn.addEventListener('click',()=>{
    if(!hiddenFloatIndi[0].classList.contains('float-ani')){
        hiddenFloatIndi[0].classList.add('float-ani');
        setTimeout(()=>{hiddenFloatIndi[1].classList.add('float-ani');},100);
        setTimeout(()=>{hiddenFloatIndi[2].classList.add('float-ani');},200);
    } else {
        hidefloat();
    }

});


document.addEventListener('click', (e)=>{   //body 클릭하면 닫히게
    if(!hiddenFloat.parentElement.contains(e.target)){
       hidefloat();
    }
});

document.addEventListener('keydown', (e)=>{   //esc 키 누르면 닫히게
    if(e.key === 'Escape'){
        hidefloat();
    }
});


}