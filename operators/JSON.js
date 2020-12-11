var name = "Marcelo Barcelos";
var age = 28;
var company = "Arcturo";

// Normal way to use JSON
var user = {
    name : name,
    age : age,
    company : company
}

// New ES to use JSON
var userNewWay = {
    name,
    age,
    company
}

console.log(user);
console.log(userNewWay);