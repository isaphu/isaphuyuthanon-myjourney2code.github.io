function myMath () {
    let myMath = 2
    return Math.random(1,5);
}
console.log(Math.random(myMath * 100));

function  myMath (min,max) {
    return(Math.floor(Math.random(1,5)))
}

function myMath (min, max) {
    let num = Math.random() * (max - min) + min;

    return num.toFixed(2)
  }

console.log(myMath(8,10))

