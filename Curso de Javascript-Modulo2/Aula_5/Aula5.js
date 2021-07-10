// Arrays
let alunosGama = ['Moisés','Ivy','Zoe','Priscila']
console.log(alunosGama[2]); // Zoe

// Spread
let meninos = ['Moisés','João','Eduardo']
let meninas = ['Priscila','Ivy','Zoe','Mydian']
let meninosEMeninas = [...meninos, ...meninas]

console.log(meninos);
console.log(meninas);
console.log(meninosEMeninas);

// Métodos
// Map
meninosEMeninas.map(Element =>{
    console.log(Element);
})

// Filter
let numeros = [34,45,67,90,55,76]
let impares = numeros.filter(numero => numero%2 !== 0)
let pares = numeros.filter(numero => numero%2 === 0)
console.log(impares);
console.log(pares);

// Find = retorna o primeiro resultado
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);

let letras = ['c','m', 'h', 'l', 'o']
let letra = letras.find(l => l == 'l')
console.log(letra);

// sort
let variosNumeros = [9,5,2,4,7,0,1,2,6,8]
variosNumeros.sort((a,b)=>{
    return a-b
})
console.log(variosNumeros);

let variasLetras = ['j','m','h','u','p','q','w','e','r','t','y','i','o','a','s','d','f','g','k','l','z','x','c','v','b','n']
variasLetras.sort()
console.log(variasLetras);

// reduce = reduz o nosso array a um resultado de uma operação matemática
const numbers = [1,34,35]
const soma = numbers.reduce((valorAnterior,valorAtual)=>{
    return valorAnterior+valorAtual
},0)

console.log(soma); // 75