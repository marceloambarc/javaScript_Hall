var name = "Marcelo Barcelos";
var age = 28;

var company = {
    name : "Arcturo",
    city : "Porto Alegre",
    site : "arcturo.co",
    email : "invest@arcturo.co"
}

// Use not recommended
var user = {
    name,
    age,
    comapny : company.name,
    city : company.city,
    site : company.site,
    email : company.email
}

// Spred Operator
var spreadUser = {
    name,
    age,
    ...company
}

console.log(user);
console.log(spreadUser);