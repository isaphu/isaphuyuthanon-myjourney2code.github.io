function extractCurrencyValue(str,rate) {
    return Number(str.slice(1)) * rate;
 }
 console.log(extractCurrencyValue('$120', 30.5))