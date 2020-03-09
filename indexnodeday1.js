// const vacationSpots = ['Paris','BKK','Tulum'];
// const mysecondSpots = ['Paris','BKK','KL'];
// console.log(vacationSpots);

// const fs = require('fs');

// fs.writeFileSync('ThisIsMyFirstNode.txt', 'Hello, World')
// let content = fs.readFileSync('ThisIsMyFirstNode.txt',{
//     encoding: 'utf-8'
// });
// console.log(content);

// function addSync(a,b) {
//     return a + b;
// }
// let sum = addSync(1,2);

// function add(a,b,callbackFunction) {
//     callbackFunction(null, a + b);
// }
// let sum = addSync(2,3);
// console.log(sym)


// function addSync(a, b) {
//     return a + b;
//   }
//   let sum = addSync(1,2);

//   function add(a, b, callbackFunction) {
//     callbackFunction( null, a + b );
//   }
//   let sum2;
//   add(1, 2, (err, returnValue) => {
//     sum2 = returnValue;
//   });
//   function add(a, b, callbackFunction) {
//     callbackFunction( null, a + b );
//     return true;
//   }
//   let sum2;
//   let result = add(1, 2, function(err, returnValue){
//     sum2 = returnValue;
//   });

// function mal(a,b,callbackFunction) {
//     callbackFunction(a*b);
// }

// mal(2,3, (result)=> {
//     console.log(result)
// })

// function max(a,b,callbackFunction) {
//     if (a > b) {
//         callbackFunction(a)
//     } else {
//         callbackFunction(b)
//     }
// }

// max(2,3, (result)=> {
//     console.log(result)
// })
// function STO() {
// setTimeout(function(){ 
//     console.log("a"); 
//   }, 3000);
// setTimeout(function(){
//     console.log('b')
// },3000)
// }

// let timerId = setTimeout(func|code, [1000], [arg1], [arg2], ...)

// function timerId () {
//     console.log('a');
//   }

// setTimeout(timerId, 1000);

// setTimeout(() => {
//     console.log('Best')
//     setTimeout(() => {
//         console.log('will')
//         setTimeout(() => {
//             console.log('always')
//             setTimeout(() => {
//                 console.log('come')
//                 setTimeout(() => {
//                     console.log('to')
//                     setTimeout(() => {
//                         console.log('the')
//                         setTimeout(() => {
//                             console.log('class')
// setTimeout(() => {
//     console.log('late')
// }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function setTimeoutandLog(input) {
//     return new Promise(fucntion(fullfill, reject) {
//         if (input > 1) {
//         fullfill('เร็วมาก')
//     } else {
//         reject('ช้ามาก')
//     }
//   })
// }

// setTimeoutandLog(2)
//     .then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000).then(function (result) {
//         console.log(result)
//     }, 1000)
// .catch(fucntion(err) {
//     console.log(err)
// })

// function setTimeoutandLog(input) {
//     return new Promise(function(resolve,reject){
//         setTimeout(resolve,1000);
//     }).then(function(){
//         console.log(setTimeoutandLog('a'))
//     }).then(function(){uskrbvflagkb. srglkosrt.9
//         console.log(setTimeoutandLog('b')) {

// }

function setTimeoutandLog(input) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(input)
            resolve(input)
        }, 500);
    })
}

setTimeoutandLog('Hello').then(function(){
    return setTimeoutandLog('World')
}).then(function(){
    return setTimeoutandLog('It\'s me Isa')
})

async function runCode() {
    const a = await setTimeoutandLog('a');
    console.log(a);
}

runCode();

await setTimeoutandLog('a');
await setTimeoutandLog('b');
await setTimeoutandLog('b');
await setTimeoutandLog('c');
await setTimeoutandLog('d');