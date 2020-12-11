///Points received in a test
const array = [90, 89, 70];

//response in console.log
console.log(cassicAvarage(array));

function classAvarage(notes) {
    const media = calculateAvarage(notes);
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calculateAvarage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum/(array.length);
}