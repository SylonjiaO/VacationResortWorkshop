
function preventDefault() {
    checkbox.addEventListener("click", ect, false);
}
function etc(event) {
    event.preventDefault();
    //get querey selectors
    let nights = document.getElementById("nightVisits").value;
    let travelDateElement = new Date(document.getElementById("travelDates")).value;
    let roomOptionsValue = document.querySelector("input[name='roomOptions']:checked").value;
    let discounted = document.querySelector("input[name='discount']:checked").value;


    let month = travelDateElement.getMonth();
    let thisSeason = false;
    let price = 0;
    let discount = 0;
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

    console.log(month);

    
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
   
    
    if (discounted && discounted.value === "aAA"){
        discount += .1 * price
    } 
    if (discounted && discounted.value === "serviceDiscount") {
        discount += .2 * price
    }
     if (discounted && discounted.value === "none" ) {
        discount = 0
    }


let discountedPrice = Math.abs(discount - price);
    let taxes = .12 * discountedPrice
    let total = taxes + discountedPrice;


const money = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' });

document.getElementById("originalRate").innerText = money.format(`${price}`);
document.getElementById("discountID").innerText = money.format(`${discount}`);
document.getElementById("discountedRateID").innerText = money.format(`${discountedPrice}`);
document.getElementById("taxes").innerText = money.format(`${taxes}`);
document.getElementById("totalStay").innerText = money.format(`${total}`);
}