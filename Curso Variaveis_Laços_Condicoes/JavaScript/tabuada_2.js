let tabuada = document.getElementById('tabuada')
let calcular = document.getElementById('calcular')
let res = document.getElementById('resultado')
let tab = document.getElementById('tab')

calcular.addEventListener('click',()=>{
    tab.innerHTML = "<h6>Tabuado do "+tabuada.value+"</h6>"
    for(let i =1; i<=10;i++)
        tab.innerHTML+="<ul class='text-center m-0' id='resultado'><li class='list-group-item list-group-item-primary p-0'>"+tabuada.value+" x "+contador1+" = "+tabuada.value*contador1+"</li></ul>"
        contador1 += 1
})