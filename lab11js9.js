let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
//   array2 [
//     { name: "banana", birth: "1990-10-10" },
//       { name: "peach", birth: "2002-10-13" },
//   ] // filter คนเกิดเดือน 10

// let array2 = array1.filter((item) => {
//     return Number((item.birth.split("-")[1] < 2000));

// })


let array2 = array1.filter(function (item) {
    let array = item.birth.split("-");
    return array[1] == 10;
});

console.log(array2);