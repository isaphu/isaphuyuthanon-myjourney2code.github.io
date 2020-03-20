
// prototype inheritance

let animal = {
    jumps: null
};

let rabbit = {
    _proto_: animal,
    jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
