// ----------Normal Function------//
function sum(a,b){
    return(a+b); // Line 27
}

var mult = function(a,b){
    return (a*b); // Line 27
}
// SAME ABOVE AS BELOW:
function mult1(a,b){
    return (a*b); // Line 27
}

// -------Arrow Function---------//

// One Param; One Line
var sub = a => console.log(a-2);

// Multi Params; Multi Line
var mult2 = (a,b,c) => {
    console.log(a * b * c);
}
// SAME ABOVE AS BELOW
function mult3(a,b,c){
    console.log(a * b * c);
}

// Arrow Function with return
var sub2 = (a,b,c) => {
    return a - b - c;
}

// Omit Return
var sub3 = (a,b,c) => a - b - c;

//----------RESULTS-------------//

var result = sum(2,4);
var result1 = mult(2,4);

var result2 = sub2(5,2,1);
var result3 = sub3(6,3,1);

console.log(mult1(2,2));

console.log(result,result1,result2);
