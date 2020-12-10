const fs = require("fs"); // File System.

// READ
fs.readFile("./mam.barc",{ encoding : 'utf-8' },(error, data) => {
    if(error){
        console.log("Error on reading file");
    }else{
        console.log(data);
    }
});