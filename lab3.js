let calculator = {
    read () {
        this.key1 = +prompt('Insert your decimal:');
        this.key2 = +prompt('Insert your integer:');
        return this
    },

    sum () {
        this.key1 + this.key2;
        return this
    },

    mul () {
        this.key1 * this.key2;
        return this
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );