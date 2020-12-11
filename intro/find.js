var TeamPv = {
    pilot : "Gustav Folly",
    car : "Porsche",
    model : "911",
    age : 1989
}

var WhiteLamb = {
    pilot : "Roger Sierra",
    car : "Ferrari",
    model : "305",
    age: 1985
}

var PleasantRace = {
    pilot : "Alan Krovetsky",
    car : "Lamborghini",
    model : "Miura",
    age: 1983
}

// Old Manipulations :Filter // forEach

// ES6: find()

var teams = [TeamPv, WhiteLamb, PleasantRace];
var winner = teams.find(team => team.model === "Miura");

console.log("The winner is " + winner.pilot);
console.log("With car produced in: " + winner.age);