// FizzBuzz
// Divisivel por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for um numero => 'Não é um numero'
// Se não for divisivel nem por 3 e nem por 5 => Entrada

function fizzBuzz(entrada) {
    if(typeof(entrada) !== 'number'){
        return console.log("Não é um numero");
    }

    if(entrada % 3 === 0 && entrada % 5 === 0 ){
        return console.log('FizzBuzz');
    }

    if(entrada % 3 === 0 ){
        return console.log('Fizz');
    }

    if(entrada % 5 === 0 ){
        return console.log('Buzz');
    }

    return entrada
}
fizzBuzz()

// reverse a string
let newStr = ''
function reverseAString(str){
    for(let i = str.length -1; i >=0; i--){
        newStr += str[i];
        console.log(newStr);
    }
}
let resultado = reverseAString('Gama Academy')

// conversor celsius para fahrenheit
function convertToFahrenheit(value) {
    return value * 1.8 + 32
}
let result = convertToFahrenheit(40)
console.log(`O valor fahrenheit é ${result}`);
