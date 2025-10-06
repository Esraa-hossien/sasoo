let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');

}
let searchForm = document.querySelector('.search-form');
document.querySelector('#search').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
   
};

let cart = document.querySelector('.cart');
document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');

};
Window.onscroll = () =>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');

}
