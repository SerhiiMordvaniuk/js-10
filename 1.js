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

// const date = new Date();
// console.log(typeof date);
 
// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for(let i = 0; i <= 100 ; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

// const btn = document.querySelector(".btn");
// const body = document.querySelector("body")

// console.log(body);
// const timer = setTimeout(() => {
// 		body.style.background = "green"
// 	}, 5000)
// const foo = () => {
// 	console.log("ok");

// }


// clearTimeout(timer)

// const btn = document.querySelector('.btn');

// function foo() {
// 	console.log("ok");
	
// }
// const interval = setInterval(() => {
// 	console.log("alalla");
// 	foo()
// }, 2000)

// clearInterval(interval)

// const start = Date.now();
// for (let i = 0; i < 1; i++) {
// 	console.log(i);
	
// }

// let finish = Date.now();
// const lalala = finish - start

// console.log(`${lalala} ms`);


 
// const now = Date.now();
// console.log(now);
// console.log(getDay());

// function lalala() {
//     const first = Date.now()
//     console.log("start");
//     setTimeout(() => {
//         console.log("timer");
//     }, 10000)
//     const sekond = Date.now()
//     setInterval(() => {
//         console.log(a);
        
//     }, 5000)
//     const a = sekond - first;

    
// }

// const click = document.querySelector(".btn");

// click.addEventListener("click", lalala)
//  let myFunc = function () {
//   alert("Привіт!!!");
// };

//  let myFunc = function (name) {
//   alert("Привіт, " + name + "!!!");
// };
 
// const lalalal = new Date()
// console.log(lalalal);
// lalalal.setFullYear(2025);
// console.log(lalalal);
// lalalal.setHours(20, 15, 1, 99)
// console.log(lalalal);

// console.log(lalalal(milliseconds) );

// const lalala = Date.parse('2024-01-15T20:15');
// console.log(lalala);
// console.log("kk");

// const date = Date.now()
// console.log(date);


// function getdate(lll) {
//     let days = ["НД", "ПН", "ВТ", "СР", "ЧТ"]
//     alert(days[lll.getDay()])
// }

// getdate(date)

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });


// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );


// let lalala = true;
// // lalala = false;

// const promice = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("okok");
        
//         if (lalala === true) {
//             resolve(`Ok`)
//         }
//         else {
//             reject(`no`)
//         }
//     }, 2000
//     )
// })

// console.log(promice);


// const isSuccess = true;

// const promise = new Promise((pravda, brehna) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       pravda();
//     } else {
//       brehna();
//     }
//   }, 2000);
// });
// const lalala = ()=> console.log(`lalalla`);
// ;
// const nonono = () => console.log(`nonono`);
// const final = ()=> console.log(`final`);


// promise.then(nonono)
// promise.then(()=> {console.log(`2 then`)})
// promise.then(()=> {console.log(`3 ten`)})
// promise.catch(lalala)
// promise.finally(final)

// const lalala = name => {
//     new Promise((resolve, reject) => {
        
//     })
// }

// lalala("Serhii").then(user => console.log(user))

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
// 		// ...
//   });
// };

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
// 		// ...
//   });
// };

// fetchUserFromServer("Mango")  // результатом виклику fetchUserFromServer("Mango") буде проміс
// 	.then(user => console.log(user))  // проміс обробляємо в методі then()
//   .catch(error => console.error(error));  // проміс обробляємо в методі catch()

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
// 		onSuccess(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting(
//   "Mango",
//   lalala => console.log(lalala),
//   error => console.error(error)
// );


// const userName = name => {
//     if (!name) {
//             return Promise.reject("Імя немає")
//     }
//     else {
//         return Promise.resolve(`hello ${name}`)
//     }
// }

// userName("Illa").then((resolve)=>console.log(resolve))

// let student = {
//   name: 'Іван',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   spouse: null
// };



// let tututu = JSON.stringify(student);
// console.log(tututu);
// console.log(typeof tututu);


// let str = '{"title":"Конференція","date":"2017-11-30T12:00:00.000Z"}';

// let lalala = JSON.parse(str, function (key, value) {
//     if (key == 'date') return new Date(value);
//     return value
// })

// console.log(lalala.date.getDate());


// let user = {
//   name: "Іван Іванов",
//   age: 35
// };

// let lalala = JSON.stringify(user)
// console.log(lalala);

// localStorage.keys = "lololo"

// let keys = Object.keys(localStorage);
// for (let key of keys) {
//     console.log(`${key} : ${localStorage.getItem(key)}`);
    
// }



