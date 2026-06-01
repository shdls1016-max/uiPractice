export let uititles = document.querySelectorAll('.uititle');
export let uiconts = document.querySelectorAll('.uicont');
export let uiarrows = document.querySelectorAll('.chevronIcon.ui');

export let topbtn = document.querySelector('#topBtn');

export let tabs = document.querySelectorAll('.tab--btn');
export let tabConts = document.querySelectorAll('.tab--cont');

export const rootStyle = document.documentElement.style;

export const dropBtn = document.querySelector('button.drop');
export const dropBox = document.querySelector('.drop--box');
export const dropList = document.querySelectorAll('.drop--box>li>a');

export const popoverBtn = document.querySelector('.popover--btn');
export const popoverMenu = document.querySelector('.popover--menu-box');

export const modalBtn = document.querySelector('.modal--btn-open');
export const modal = document.querySelector('.modal');   //bg
export const modalClose = document.querySelector('.modal-i');
export const modalWindow = document.querySelector('.modal--box');  //msgbox (modal에 포함되어 있음)

export const menuBtn = document.querySelector('.floating--init');
export const hiddenFloat = document.querySelector('.floating--hidden');
export const hiddenFloatIndi = hiddenFloat.children;

export const blockScroll = (e)=>{
    e.preventDefault();
}
