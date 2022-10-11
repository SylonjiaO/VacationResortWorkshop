window.onload = etc();

function etc() {
   
    //get querey selectors
    const nights = parseInt(document.getElementById("nightVisits").value);
    let travelDateElement = new Date(document.getElementById("travelDates")).value;
    let roomOptionsValue = document.querySelector("input[name='roomOptions']:checked").value;
    let discounted = document.querySelector("input[name='discount']:checked");

let discount = getDiscount(discounted,price);
let price = getPrice(month, price, roomOptionsValue);
let tax= getTaxes(discountedPrice);
let discountedPrice = getDiscountedPrice(discount);
let total =  getTotalPrice(discountedPrice,taxes);

const money = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' });

document.getElementById("originalRate").innerHTML = money.format(price);
document.getElementById("discountID").innerHTML = money.format(discount);
document.getElementById("discountedrateID").innerHTML = money.format(discountedPrice);
document.getElementById("taxes").innerHTML = money.format(tax);
document.getElementById("totalStay").innerHTML = money.format(total);

}

function getPrice(month, price, roomOptionsValue ){
    let month = travelDateElement.getMonth();
    let thisSeason = false;
    switch (month) {
        case 5:
        case 6:
        case 7:
            thisSeason = true;
            break;
        default:
            thisSeason = false;
            break;
    }
    let price = 0
    if (thisSeason) {
        if (roomOptionsValue == "king" || roomOptionsValue == "queen") {
            price = 250 * nights;
        } else {
            price = 350 * nights;
        }
    } else {
        if (roomOptionsValue == "king" || roomOptionsValue == "queen") {
                price = 150 * nights;
        } else{
            price = 210 * nights;
        }
    }
    return price;
}

function getDiscount(discounted,price){
   
    let discount = 0
    if (discounted && discounted.value === aAA){
        discount = (.1 * price)
    } 
    if (discounted && discounted.value === serviceDiscount) {
        discount = (.2 * price)
    }
     if (discounted && discounted.value === none ) {
        discount = 0
    }


    return discount;
}
function getDiscountedPrice(discount){
let discountedPrice = discount - price;
    return discountedPrice;
}

function getTaxes(discountedPrice){
    let taxes = .12 * discountedPrice
    return taxes;
}
function getTotalPrice(discountedPrice,taxes,nights){
    return (taxes + discountedPrice)* nights;
}

