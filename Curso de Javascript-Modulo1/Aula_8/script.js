let input = document.getElementById('input')
let add = document.getElementById('add')
let listToDo = document.getElementById('toDoContainer')

add.addEventListener('click',(e)=>{
    if(input.value === ""){
        e.preventDefault()
        input.style.background = 'red'
        input.focus()
        alert("Dados não preenchidos")
    }else{
        e.preventDefault()
        input.style.background = 'transparent'
        listToDo.innerHTML += `<li>${input.value}</li>`
        input.value = ""
        input.focus()
    }
})