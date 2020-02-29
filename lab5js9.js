let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]

let array2 = array1.filter(item => item.age <18)
console.log(array2)
// function array2(item) {
//     return array1.filter(item => item.age < 18)
// }

// console.log(array2)
//   array2 [
//     { name: "apple", age: 14 },
//     { name: "pineapple", age: 16 },
//   ] 
