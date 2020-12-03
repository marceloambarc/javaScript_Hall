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

function takeUsers(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
                {name: "Victor", lang: "JS"},
                {name: "Marco", lang: "Xamarim"},
                {name: "Silva", lang: "Java"}
            ])
        },3000);
    })
}

async function principal(){
    var users = await takeUsers();
    console.log(users);
}

principal();

/*
OLD USAGE
------------------------------
takeUsers().then((users) => {
    console.log(users);
});
------------------------------
*/ 