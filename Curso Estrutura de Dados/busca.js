var valores = []
valores = [5, 8, 10, 22, 45, 38]

function busca(num){
    for(let i = 0; i<valores.length; i++){
        if(num == valores[i]){
            return i
        }
    }
    return -1
}

// utilizando a nossa ferramenta de busca

console.log(busca(10))
console.log(busca(50))