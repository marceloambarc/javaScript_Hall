const first = [1,2,3];
const second = [4,5,6];

const combine = first.concat(second);
console.log(combine);

const splitFirst = combine.slice(0,3);
const splitSecond = combine.slice(3,7);
console.log(splitFirst, splitSecond);

const combine1 = [...first, 'a', ...second, 'b'];
console.log(combine1);

const clone = [...combine1];
console.log(clone);