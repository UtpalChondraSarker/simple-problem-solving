// const products=[
    
//     {name:'samymi s3 phone',price:12000},
//     {name:'htc s3 phone',price:32000},
//     {name:'iphone 11pro max phone',price:80},
//     {name:'samsung s3 phone',price:18000},
//     {name:'samsung s3 phone',price:700},
//     {name:'nokiya s6 phone',price:10000},
//     {name:'sampony s3 phone',price:100},
//     {name:'redmi note 8 pro phone',price:41000},
// ];

// for(const product of products){
//     if(product.price<10000){
//         break;
    
//     }
//     console.log(product);
// }

// for(product of products){
//     if(product.price <10000){
//         continue;
//     }
//     console.log(product);
// }

//Problem Number1
//function declare
function seerToMon(seer) {
let mon = 0;
if (mon = seer / 40) {
return mon;
}
else {
return 'value is not accepted';
}
}
//function cell
const myTotalMon = seerToMon(80);
console.log(myTotalMon);
//problem Number2
//function declare
function totalSales(shirtSales, pantSales, shoseSales) {
if (shoseSales >= 0 && pantSales >= 0 && shoseSales >= 0) {
//all total sales price
const shirtPrice = 100;
const pantPrice = 200;
const shosePrice = 500;
//shirt,prent,shoes calculation
const totalShirtPrice = shirtSales * shirtPrice;
const totalPantPrice = pantSales * pantPrice;
const totalShosePrice = shoseSales * shosePrice;
const totalPrice = totalShirtPrice + totalPantPrice + totalShosePrice;
return totalPrice;
}
else {
return "Invalid input";
}
}
//function cell
const totalResult = totalSales(2, 0, 5);
console.log(totalResult);
//problem number 3
//function declare
function deliveryCost(treshirt) {
//treshirt delivery cost
firstTreshirtCost = 100;
secondTreshirtCost = 80;
thirdTreshirtCost = 50;
// first condition
if (treshirt <= 100) {
const count = treshirt * firstTreshirtCost;
return count;
}
//second condition
else if (treshirt <= 200) {
const firstTreshirt = 100 * firstTreshirtCost;
const shirt = treshirt - 100;
const secondTreshirt = shirt * secondTreshirtCost;
const totalshirt = firstTreshirt + secondTreshirt;
return totalshirt;
}
//third condition
else {
const firstTreshirt = 100 * firstTreshirtCost;
const secondTreshirt = 100 * secondTreshirtCost;
const shirt = treshirt - 200;
const shirtCost = shirt * thirdTreshirtCost;
const totalShirtPrice = firstTreshirt + secondTreshirt + shirtCost;
return totalShirtPrice;
}
}
//function cell
const totalcost = deliveryCost(110);
console.log(totalcost);
//problem number 4
//function declare
function bestFriend(friends) {
for (let i = 0; i < friends.length; i++) {
let element = friends[i];
if (element.length == 5) {
const name = element;
return name;
}
}
}
//function cell
const friends = ['sushantosarker', 'kamal', 'sushanto', 'mamun', 'mon', 'belel', 'utpal', 'shanto', 'sushanto'];
const result = bestFriend(friends)
console.log(result);
