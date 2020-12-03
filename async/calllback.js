function sendEmail(body,sendto,callback){
    setTimeout(() => {
        var isError = true;

        if(isError){
            callback("The email has failed.");
        }else{
            console.log(`
            To: ${sendto}
            -------------------
            ${body}
            -------------------
            From: Mambarc
            `)
            callback();
        }
    },8000)
}

console.log("Inicio de envio de email");
sendEmail("Hello, welcome to Arcturo","mambarc@arcturo.co",(erro) => {
    if(erro == undefined){
        console.log("Email enviado com sucesso!");
    }else{
        console.log("Ocorreu um erro: " + erro);
    }
});