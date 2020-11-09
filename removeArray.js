const cars = ['Beatle', 'BMW', 'Audi', 'Porsche', 'Bugatti'];

//Remove Last Index
const removeLast = cars.pop();
console.log(removeLast);
console.log(cars);

//Remove First Index
const removeFirst = cars.shift();
console.log(removeFirst);
console.log(cars);

//Remove Middle Index
const removeMidle = cars.splice(2,1);
console.log(removeMiddle);
console.log(cars);

//Remove addLast
const addLast = cars.push('Ferrari');
console.log(addLast);
console.log(cars);