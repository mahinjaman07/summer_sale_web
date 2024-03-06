let cards = document.getElementsByClassName("card");
for (let card of cards){
    card.addEventListener("click", function(e){
        const name = e.target.parentNode.querySelector('.p_name');
        const price = e.target.parentNode.querySelector('.p_price');
        console.log(name);
        console.log(price);
    });
}
