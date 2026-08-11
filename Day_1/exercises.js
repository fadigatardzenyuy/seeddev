// // display  numbers from 1 to 10
// function displayNumbers() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// // display letters from A to H using for loop
// function displayLetters() {
//     for (let i = 65; i <= 72; i++) {
//         console.log(String.fromCharCode(i));
//     }
//     }

// displayNumbers();
// displayLetters();
try {
const response = await fetch('https://open.er-api.com/v6/latest/USD');
const body = await response.json();

console.log(body);
const rates = body.rates.EUR;
console.log(`Exchange rate for EUR: ${rates}`);
}catch (error) {
    console.error('Error fetching data:', error);
}