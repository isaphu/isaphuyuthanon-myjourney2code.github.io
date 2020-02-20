let person1 = prompt('Your name:','')
let person1Height = prompt(person1 + ', please enter your height in CM')
let person1Weight = prompt(person1 + ', please enter your weight in KG')

let person2 = prompt('Your name:','')
let person2Height = prompt(person2 + ', please enter your height in CM')
let person2Weight = prompt(person2 + ', please enter your weight in KG')


bmiPerson1 = person1Weight/(person1Height**2)
bmiPerson2 = person2Weight/(person2Height**2)

if (bmiPerson1 > bmiPerson2) {
  alert(person1 + ' your BMI is ' + bmiPerson1 + ' and your result is more than '+ person2)
} else {
  alert(person2 + ' your BMI is ' + bmiPerson2 + ' and your result is more than '+ person1)
}