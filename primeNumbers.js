showPrimes(15);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (numberPrime(number)) console.log(number);
    }
}

function numberPrime(number) {
    let prime = true;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            return false;
        }
        return true;
    }
}