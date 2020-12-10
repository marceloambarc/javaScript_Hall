const fs = require("fs");

function userModify(name,course,category){
    fs.readFile("./user.json",{ encoding : 'utf-8' },(error,data) => {
        if(error){
            console.log("an error occurred")
        }else{
            var content = JSON.parse(data);
            
            content.name = name;
            content.course = course;
            content.category = category;
    
            fs.writeFile("./user.json", JSON.stringify(content),(error) => {
                if(error){
                    console.log("an error occurred on writeFile");
                }
            });
        }
    });
}

userModify("John Joseph", "Correct PHP", "PHP");