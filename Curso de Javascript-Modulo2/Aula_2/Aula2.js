// template string
let role = "transformador"
console.log(`Moisés é ${role}`);

let data = new Date()
function anoNascimeto(ano, nome){
    return console.log(`O ${nome} tem ${data.getFullYear()-ano} anos de idade`);
}

anoNascimeto(1982, 'Moisés')