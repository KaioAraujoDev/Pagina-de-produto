const cart = document.querySelector('#cart');
const cardCart = document.querySelector('#cardCart');

cart.addEventListener('click',()=>{
    if(cardCart.classList.contains('visible')){
        cardCart.classList.remove('visible');
    }else{
        cardCart.classList.add('visible');
    }
    
});