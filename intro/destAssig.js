//destructuring assignment
var user = {
    name : "Marcelo Barcelos",
    prof : "Developer",
    company: "Arcturo",
    course : "Node.js Formation"
}

var prof = user.prof;
var course = user.course;

console.log(prof);
console.log(course);

var { name,company } = user; // = var name = user.name / var company = user.company
console.log(name,company);
