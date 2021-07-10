// imprimir apenas os numeros pares
for(let i = 0; i<100; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

// crie um algoritimo que que receba 3 notas de um aluno, calcule sua média e
// mostre as seguintes mensagens de acordo com a situação:
// - Se a média for igual ou maior que 7 - Aprovado
// - Se a média for maior ou igual que a 5 e menor que 7 - Recuperação
// - Se a média for menor que 5 - Reprovado

function media(nota1, nota2, nota3){
    let resultado = parseInt(nota1+nota2+nota3)/3
    if(resultado >=7){
        return console.log("Aprovado")
    }else if(resultado >=5 && resultado < 7){
        return console.log("Recuperação")
    }else{
        return console.log("Reprovado")
    }
}
media(6,6,8)

// tabuadas
// escolha quais tabuadas deseja apresentar
let de = 1 // primeira tabuada
let ate = 5 // ultima tabuada
if(ate < de){
    de = 1
    ate = 10
    console.log("A ultima tabuada não pode ser menor que a primeira");
    console.log("Apresentado a tabuada de 1 a 10");
}
for(let i = de; i<=ate; i++){
    console.log("-------------------------------------------");
    console.log(">>>>>>>>>>>>Tabuada do "+i+"<<<<<<<<<<<<<<");
    console.log("-------------------------------------------");
    for(let j = 1; j<=10; j++){
        console.log(j+" X " + i + " = " + i*j)
    }
}