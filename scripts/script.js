let modalQt = 1;
let cart = [];
let modalKey = 0;

const c = el => document.querySelector(el)
const cs = el => document.querySelectorAll(el);

// ativar menu
c('.menu-openner').addEventListener('click', () =>{
    if(cart.length > 0){
        c('aside').style.left = '0';
    }
})
c('.menu-closer').addEventListener('click', () =>{
    c('aside').style.left = "100vw";
})


cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
})

//carrinho
