"use strict"
// // Виконується першою
// console.log("First log");

// setTimeout(() => {
// 	// Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log("Second log");
// }, 20000);

// // Виконується другою
// console.log("Third log");


// const btn = document.querySelector(".btn");

// let timer
 

// const lalala = () => {
//     console.log("click");
    
//     timer = setTimeout(() => {
//         alert("Lalala")
//     }, 1000)
// }

const date = new Date();
console.log(typeof date);
 
const startTime = Date.now();

// Твій код, виконуваний упродовж деякого часу
for(let i = 0; i <= 100 ; i += 1) {
	console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);

