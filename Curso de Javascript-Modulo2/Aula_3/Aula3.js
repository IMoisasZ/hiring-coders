// Operador ternario
// ternario

// if...else
function calcularIdade(idade){
    if(idade >= 18){
        return console.log('Maior de idade');
    }else{
        return console.log("Menor de idade");
    }
}
calcularIdade(18)

// ternario
function calcularIdadeTernario(idadeTernario){
    return idadeTernario >= 18 ? 'Maior de idade' : 'Menor de idade'
}
console.log(calcularIdadeTernario(16))