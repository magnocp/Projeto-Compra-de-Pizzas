c('.cart--finalizar').addEventListener('click', ()=>{
    if(confirm("Finalizar Compra?")){
       alert("Compra finalizada!")
       location.reload();
    }else{
        alert("Compra Cancelada!")
    }
})