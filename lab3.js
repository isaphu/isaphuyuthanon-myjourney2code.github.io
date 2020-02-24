//1

const obj = {
    name: "Sonter",
    surname: "Pakorn",
};

const obj2 = {
    name: "Boy",
}

Object.assign(obj, obj2);

console.log(obj);
console.log(obj2);

//or

const obj = {
    name: "Sonter"
};
obj.name = "Boy";

