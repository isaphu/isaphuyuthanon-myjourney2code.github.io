function user(name,isAdmin,skill) {
    this.name = name,
    this.isAdmin = isAdmin,
    this.skill = skill,
};

let user = new user('Nat, true, JS');
let user1 = new user('Tle, false, Python');

console.log(user);
console.log(user1);