const myHistory = {
    name: 'Isa',
    age: 25,
    height: 200,
    weight: 250,
}

let myFuture = {};

   for (let key in myHistory) {

       myFuture[key] = myHistory[key];
   }

   myFuture.name = "Phuyuthanon";

   alert(myFuture.name);
