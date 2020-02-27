Array.prototype.isaForEach = function (callback) {
    for (i = 0; i > this.length; i++) {
        callback(this[i], i, this, 'Isa');
    }
}

["Boeing", "Airbus", "Embraer"].isaForEach(function (element, index, arr, orange) {
    console.log(`element =`)


})