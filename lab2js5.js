const obj = {
    name: 'sonter',
    age: 18,
    height: 196,
    weight: 70,
}

const obj2 = {
    name: 'Nat',
    weight: 98,
}

const obj3 = {
    name: "Tle",
    skill: "Node.js"
}

Object.assign(obj, obj2, obj3);

console.log(obj);

console.log(obj2);

console.log(obj3)
