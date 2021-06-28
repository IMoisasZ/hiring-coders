let nota = document.getElementById('nota')
let btn_inlcuir = document.getElementById('incluir')
let btn_calcular = document.getElementById('calcular')
let notas_computadas = document.getElementById('notas')
let qtde_notas = document.getElementById('qtde-notas')
let media = document.getElementById('media')
let soma = document.getElementById('soma')
let status_ = document.getElementById('status')
let erro = document.getElementById('erro')

btn_inlcuir.addEventListener('click', ()=>{
    if(nota.value === ""){
        nota.style.backgroundColor = 'rgb(255,0,0)'
        erro.innerHTML = "<ul class='alert alert-danger'><p>Nota não digitada!</p></ul>"
        nota.focus()
    }else{
        let notas = []
        notas.push(
            nota.value
        )
        
        let qtde_f = qtde_notas.value
        qtde_notas.value = Number(qtde_f) + Number(1)
    
        let nota_f = nota.value
        
        let soma_f = soma.value
        soma.value = Number(soma_f) + Number(nota_f)
    
        media.value = (soma.value / qtde_notas.value).toFixed(2)
    
        nota.value = ""
    
        for(let i =0; i<notas.length; i++){
            notas_computadas.innerHTML += "<ul><li> Nota "+qtde_notas.value+"=>"+notas[i]+"</li></ul>"
        }
        
        if(media.value >= 9 && media.value <= 10){
            status_.value = "Ótimo - Aprovado / Melhor impossivel!"
            status_.style.backgroundColor = 'rgb(0,255,127)'
        }else if(media.value >= 8 && media.value < 9){
            status_.value = "Bom - Aprovado / Poderia ter sido melhor!"
            status_.style.backgroundColor = 'rgb(144,238,144)'
        }else if(media.value >= 7 && media.value < 8){
            status_.value = "Regular - Aprovado / Cuidado!"
            status_.style.backgroundColor = 'rgb(173,255,47)'
        }else if(media.value >= 6 && media.value < 7){
            status_.value = "Satisfatório - Aprovado / Precisa melhorar Urgente!"
            status_.style.backgroundColor = 'rgb(255,255,0)'
        }else if(media.value >= 5 && media.value < 6){
            status_.value = "Recuperação - Recuperação / Você terá mais uma chance. Estude!!"
            status_.style.backgroundColor = 'rgb(255,99,71)'
        }else{
            status_.value = "Reprovado - Reprovado / Da proxima vez leve os estudos mais a sério!"
            status_.style.backgroundColor = 'rgb(255,0,0)'
        }
        nota.focus()
        nota.style.backgroundColor = 'rgb(255,255,255)'
        erro.innerHTML = ""
    }
})