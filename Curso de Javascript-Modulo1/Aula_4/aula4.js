// if
var numero = 1;

if(numero === 1){
    console.log("Numero é igual a 1");
}else if(numero === 2){
    console.log("Numero é diferente de 1");
}else{
    console.log("Numero é diferente de 1 e de 2");
}

// switch
var mes = "julho"
switch(mes){
    case "fevereiro":
        console.log("Mes 2");
        break;
    case "março":
        console.log("Mes 3");
        break;
    case "junho":
        console.log("Mes 6");
        break;
    default:
        console.log("Nenhum dos casos acima foram atendidos");
}