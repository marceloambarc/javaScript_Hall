var horseName = "Dinasty";
var about = "black speed Horse with 5 Grand Prix";

// Old Way
var sentence = "On Stage: " + horseName + " and he is an " + about + "."

console.log(sentence);

// Other Way
var templateLiteral = `On Stage: ${horseName} and he is an ${about}`;

//With Template
var templateLiteral1 = 
    `On Stage: ${horseName} 
    and he is an 
    ${about}`;


console.log(templateLiteral);
console.log(templateLiteral1);
