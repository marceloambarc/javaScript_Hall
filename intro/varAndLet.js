var name1 = "Marcelo";
// *access 1 
function func1(){
    var surename1 = "Amaral"
    console.log("Hello " + name1 + " " + surename1);
}
// *access 2
function func2(){
    console.log("Hi " + name1 /* + " " + surename1 (we can't access the var inside another function)*/);
}
// *access 3
func1();
func2();
console.log(name1);
console.log("============================");


// Example ____2
let a = 10; // Global
let test = true;

if(test){
    let b = 20; // Block
    var b1 = 20; // Block
    console.log(a + b);
}

/*
console.log(a + b);
Error a = Global but b = Block;
*/

// var is accessible outside the block;
console.log(a + b1);

// VAR => GLOBAL AND LOCAL
// LET => GLOBAL, LOCAL AND BLOCK;