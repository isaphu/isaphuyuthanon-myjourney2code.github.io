let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

//   function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0) 
//   }
  alert( sumSalaries(salaries) );



  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; 
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  