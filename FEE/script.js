let navbar=document.querySelector('.navbar');   //navbar nu select kita

document.querySelector('#menu-btn').onclick=()=>{   //arrow function which run only when clicked, menu da btn select kita
    navbar.classList.toggle('active');              //navbar ch jehda btn hai ohnu vdha/chotta krna
    searchForm.classList.remove('active');          //search vla dbba active/non-active horeha
    cartItem.classList.remove('active');            //cart vla dbba active/non-active horeha
}

let cartItem=document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll=()=>{       //attaches a scroll event listener to the window
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


var typeData = new Typed(".role", {
    strings: [
        "The Morning",
        "The Evening",
        "Whenever You want just choose and Order it!!",
    ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
});