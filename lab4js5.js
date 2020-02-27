4

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
function sum(salaries) {

    let sum = 0;
    for (let salary of Object.value(salaries)) {
        sum += salary;
    }
    return sum; 
}

function sum(salaries) {

    let sum = 0;

    //for (let salary of Object.values(salaries)) {
      for (let key in salaries) {
      sum += salary;
    }
  
    return sum; 
  }
  
  let salaries = {
    "John": 100,
    "Ann": 160,
    "Pete": 130
  };
  
  console.log(sum(salaries)); 
  
function sum(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

let salaries = {
  "John": 100,
  "Ann": 160,
  "Pete": 130
};

console.log(sum(salaries)); 
