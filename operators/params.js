console.log(`Insert the following text in your log console: sum(10) sub(10,20) and sub (10, 20, true) and see the change with params`);

function sum(a,b = 50){
    console.log(a + b);
}

function sub(a,b,invert = false){
    if(invert){
        console.log(b - a);
    }else{
        console.log(a - b);
    }
}