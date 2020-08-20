function closeModal(){
    c(".pizzaWindowArea").style.opacity = 0;
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = "none";
    }, 500)    
    
}