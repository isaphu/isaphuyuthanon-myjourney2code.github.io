function User(name) {
    this.name = name;
}
    this.sayHi = function() {
        alert( 'My name is: ' + this.name);
    };

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi();