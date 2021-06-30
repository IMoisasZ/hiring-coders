let valor1 = document.getElementById('valor1')
let valor2 = document.getElementById('valor2')
let resultado = document.getElementById('resultado')
let calcular = document.getElementById('btn-calcular')

calcular.addEventListener('click',()=>{
    let result = []

    // limpar os calculos anteriores
    resultado.innerHTML = ""

    let vl1 = valor1.value.replace(',','.')
    let vl2 = valor2.value.replace(',','.')

    // calculo de adição
    result.push("Soma => "+ (parseFloat(vl1) + parseFloat(vl2)).toFixed(2))

    // calculo de subtração
    result.push("Subtração => "+ (parseFloat(vl1)-parseFloat(vl2)).toFixed(2))

    // calculo de multiplicação
    result.push("Multiplicação => "+(parseFloat(vl1)*parseFloat(vl2)).toFixed(2))
    
    // calculo de Divisão
    result.push("Divisão => "+(parseFloat(vl1)/parseFloat(vl2)).toFixed(2))

    for(let i = 0; i<result.length; i++){
        resultado.innerHTML += "<li class='list-group-item list-group-item-success'>"+result[i]+"</li>" 
    }
})