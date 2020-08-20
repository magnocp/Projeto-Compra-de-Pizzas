function updateCart(){

    c('.menu-openner span').innerHTML = cart.length;


    if(cart.length > 0){
        c('aside').classList.add('show');
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart) {
            let pizzaItem = pizzaJson.find(item => item.id == cart[i].id)
            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = c('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            switch(cart[i].size){
                case 0: 
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = "M";
                    break;
                case 2:
                    pizzaSizeName = "G";
                    break
            }
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;

            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',() =>{
                if(cart[i] > 1){
                    cart[i].qt--;
                }else{
                    cart.splice(i, 1);
                }
                updateCart();
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click',() =>{
                cart[i].qt++;
                updateCart();
            })

            c('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2).replace('.', ',')}`
        c('.desconto span:last-child').innerHTML = `-R$ ${desconto.toFixed(2).replace('.', ',')}`
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`
    }else{
        c('aside').classList.remove('show');
        c('aside').style.left = "100vw";
    }
}