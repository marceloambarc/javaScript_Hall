const numbers = [1,2,3];

//add on Beginning
numbers.unshift(0);
console.log(numbers);

//add on middle (index = 1; 0 = not delete; 'a' = item)
numbers.splice(1,0,'a');
console.log(numbers);

//add on end
numbers.push(4);
console.log(numbers);