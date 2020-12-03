function catchId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        },1500);
    })
}

function searchEmailDatabase(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("marcelo@arcturo.co")
        },2000);
    })
}

function sendEmail(body,to){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var isError = true;
            if(!isError){
                resolve({time : 6, to : "victory@udemy.com"})
            }else{
                reject("Failed Email!")
            }
        },4000)
    })
}

function takeUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name : "Marcelo", lang: "HTML"},
                {name : "Lima", lang : "JS"},
                {name : "Marco", lang : "Xamarin"}
            ])
        },3000)
    })
}

async function principal(){
    var id = await catchId();
    var email = await searchEmailDatabase(id);

    try{
        await sendEmail("Hello, how are you?", email);
        console.log("Email Sent!");
    }catch(erro){
        console.log(erro);
    }
    console.log("teste1");
}

principal();