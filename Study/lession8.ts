// Array's method - Map , Filter , Reduce
// MAp 
/*let prices = [2000, 5000 , 8000 , 9000];
let finalprices = prices.map(price => price + price* 0.18);
console.log(prices);
console.log(finalprices);*/

// Filter
/*let marks = [45, 70, 80, 50];
let eligible = marks.filter(mark => mark > 60);
console.log(marks);
console.log(eligible);*/

//Combining filter and map method
/*let prices = [999, 1500, 2500, 500];

let finalPrices = prices
                .filter(price => price > 1000)
                 .map(price => price + 100);
console.log(prices);
console.log(finalPrices);*/

//Reduce - Example - Sum of numbers
let numbers = [10, 20, 30];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 60