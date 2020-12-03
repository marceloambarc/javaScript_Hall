function sendEmail(body,sendTo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var isError = true;
            if(!isError){
                resolve({time : 6, to : "mambarc@arcturo.co"}) // Prommises ok!
            }else{
                reject("Email does not exist."); // Failed
            }
        },4000)
    });
}

sendEmail("Hello World!", "mambarc@arcturo.co").then((data) => {
    console.log(`
        Time : ${data.time}
        -------------------
        email: ${data.to}
    `)
}).catch((erro) => {
    console.log(`Failed to send email: ${erro}`);
});