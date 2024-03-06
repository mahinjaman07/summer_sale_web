let cards = document.getElementsByClassName("card");
let total_price = document.getElementById('total_price');
for (let card of cards) {
    card.addEventListener("click", function (e) {
        let previousTotalPriceStr = document.getElementById('total_price');
        let previousTotalPrice = parseFloat(previousTotalPriceStr.innerHTML);
        const nameElement = e.target.parentNode.querySelector('.p_name');
        const priceElement = e.target.parentNode.querySelector('.p_price');
        const name = nameElement.innerHTML;
        const price = parseFloat(priceElement.innerHTML);
        let li = document.createElement('li');
        li.classList.add('font-bold');
        li.classList.add('text-black');
        li.innerHTML = `${name} - <span class="font-normal">${price} TK</span> `;
        let listContainer = document.getElementById('product_list_container');
        listContainer.appendChild(li);
        let newTotalPrice = setInnerText('total_price', `${previousTotalPrice + price} TK`);
        if (parseFloat(total_price.innerText) > 0){
            const purchase_btn = document.getElementById('purchase_btn');
            purchase_btn.disabled = false;
        }
        let discountPrice = setInnerText('discount_price', `00 TK`);
        let total = setInnerText('total', `${parseFloat(total_price.innerText)} TK`);
    });
}

document.getElementById('go_home_btn').addEventListener('click', function(){
    let newTotalPrice = setInnerText('total_price', `00 TK`);
    let discountPrice = setInnerText('discount_price', `00 TK`);
    let total = setInnerText('total', `00 TK`);
    let product_list_container = setInnerText('product_list_container', "");
    setValue('input_coupon')
})

document.getElementById('input_coupon').addEventListener('keyup', function(e){
    let coupon = e.target.value;
    const couponBtn = document.getElementById('coupon_btn');
    if (coupon === 'SELL200'){
        couponBtn.disabled = false;
    }
    else{
        couponBtn.disabled = true;
    }
})


document.getElementById('coupon_btn').addEventListener('click', function(){
    let totalPrice = parseFloat(total_price.innerHTML);
    let Discount = percentage(totalPrice, 20);
    let discountPrice = setInnerText('discount_price', `${parseFloat(Discount.toFixed(2))} TK`);
    let total = setInnerText('total', totalPrice - Discount);
    
})