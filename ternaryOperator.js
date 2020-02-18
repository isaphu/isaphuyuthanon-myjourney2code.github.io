let age = prompt("How old are you?");
let price;
if (age < 18) {
    price = 2000;
} else {
    price = 3000;
}

age < 18 ? price = 2000 : price = 3000;

price = (age < 18) ? 2000 : 3500;
alert(price)
