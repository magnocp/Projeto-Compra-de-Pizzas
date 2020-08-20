c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1){
     modalQt--;
     c('.pizzaInfo--qt').innerHTML = modalQt;
    }else{
        alert("Quantidade minima é um!")
    }
 })
 c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
     modalQt++;
     c('.pizzaInfo--qt').innerHTML = modalQt;
 })
 
 // selecionado
 cs('.pizzaInfo--size').forEach((size, SizeIndex)=>{
     size.addEventListener('click',(e)=>{
         c('.pizzaInfo--size.selected').classList.remove('selected');
         size.classList.add("selected")
     })
 })
 
 // Quantidade pro carrinho
 c('.pizzaInfo--addButton').addEventListener('click', ()=>{
     let size = parseInt(c('.pizzaInfo--size.selected').getAttribute("data-key"));
 
     let identifier = pizzaJson[modalKey].id + "@" + size
 
     let key = cart.findIndex((item) =>{
         return item.identifier == identifier
     })
 
     if ( key > -1) {
         cart[key].qt += modalQt;
     }else{
         cart.push({
             identifier,
             id: pizzaJson[modalKey].id,
             size,
             qt: modalQt
         })
     }     
     updateCart();  
     closeModal();    
 })