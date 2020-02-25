function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += Number(prompt('Adding Number'));
    }
}
let acc = new Accumulator(4);

console.log(acc.value);

acc.read();

console.log(acc.value);