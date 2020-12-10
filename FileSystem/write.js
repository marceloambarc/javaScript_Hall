const fs = require("fs"); // File System.

// WRITE
fs.writeFile("./mam.barc","New content of file",(err) => {
    if(err){
        console.log("Error on save");
    }
})