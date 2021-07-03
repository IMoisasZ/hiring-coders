var valores = []
valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120]

// function busca(num){
//     for(let i = 0; i<valores.length; i++){
//         if(num == valores[i]){
//             return i
//         }
//     }
//     return -1
// }

// // utilizando a nossa ferramenta de busca

// console.log(busca(10))
// console.log(busca(50))


// busca binaria
function buscaBinaria(num){
    let inicio, fim;
    let meio;
    let passos = 0
    inicio = 0;
    fim = 9;
    while(inicio <= fim){
        meio = parseInt((inicio + fim) /2)
        passos += 1
        if(num == valores[meio]){
            console.log("Achei em "+passos+" passos!");
            return meio;
        }else{
            if(num > valores[meio]){
                inicio = meio + 1;
            }else{
                fim = meio -1;
            }
        }

    }
    console.log("Não achei em "+passos+" passos")
    return -1
}

// usando a nossa ferramenta de busca
console.log(buscaBinaria(10));
console.log(buscaBinaria(130));