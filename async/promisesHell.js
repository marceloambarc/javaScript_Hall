function userId(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(5)
        },1500);
    })
}

function searchIdDatabase(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("victor@arcturo.co")
        },2000);
    })
}

function sendEmail(body,sendTo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var isError = false;
            if(!isError){
                resolve({time : 6, to : "mambarc@arcturo.co"}) // Prommises ok!
            }else{
                reject("Email does not exist."); // Failed
            }
        },4000)
    });
}

userId().then((id) => {
    searchIdDatabase(id).then((email) => {
        sendEmail("Hello, how are you",email).then(() => {
            console.log("Email sent, for user number: " + id);
        }).catch(err => {
            console.log(err);
        })
    })
})