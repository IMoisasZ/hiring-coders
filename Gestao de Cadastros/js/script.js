
let tabelaProdutos = document.getElementById('tabela-produtos')
tabelaProdutos.style.display = 'none'

let tabelaClientes = document.getElementById('tabela-clientes')
tabelaClientes.style.display = 'none'

let tabelaEnderecos = document.getElementById('tabela-enderecos')
tabelaEnderecos.style.display = 'none'

let itensTabelaProdutos = document.getElementById('itens-tabela-produtos')
let itensTabelaClientes = document.getElementById('itens-tabela-clientes')
let itensTabelaEnderecos = document.getElementById('itens-tabela-enderecos')
let select = document.getElementById('select')
let divEnderecos = document.querySelector('.div-enderecos')
let checkEnderecos = document.getElementById('enderecos')
divEnderecos.style.display = 'none'


select.addEventListener('change', function(){
    let dadosSelect = select.value
    if(dadosSelect === "1"){   
        tabelaProdutos.style.display ='none'
        tabelaClientes.style.display ='block'
        divEnderecos.style.display = 'flex'
        incluirItensTabelaClientes()
    }else if(dadosSelect === "2"){
        tabelaProdutos.style.display ='block'
        tabelaClientes.style.display ='none'
        tabelaEnderecos.style.display ='none'
        checkEnderecos.checked = false
        divEnderecos.style.display = 'none'
        document.querySelector('.msg').innerHTML = ""
        incluirItensTabelaProdutos()
    }else if(dadosSelect === "0"){
        checkEnderecos.checked = false
        divEnderecos.style.display = 'none'
        tabelaProdutos.style.display ='none'
        tabelaClientes.style.display ='none'
        tabelaEnderecos.style.display ='none'
        document.querySelector('.msg').innerHTML = ""
    }
})

checkEnderecos.addEventListener('change', function(){
    if(checkEnderecos.checked){
        tabelaEnderecos.style.display = 'block'
        document.querySelector('.msg').innerHTML = `<p>Role a página para baixo para ver os endereços ou clique no icone abaixo!</p><a href="#tabela-enderecos"><i class="bi bi-arrow-down-circle-fill icon icon-endereco"></i></a>`
        incluirItensTabelaEnderecos()
    }else{
        tabelaEnderecos.style.display = 'none'
        document.querySelector('.msg').innerHTML = ""
    }
})

function incluirItensTabelaProdutos(){
    itensTabelaProdutos.innerHTML = ""
    let produtosStorage = JSON.parse(localStorage.getItem('produtos'))
    produtosStorage.forEach(produto => {
        itensTabelaProdutos.innerHTML +=
        `
        <tr class="text-center row-table">
            <th class="text-uppercase" scope="row">${produto.id}</th>
            <th class="text-uppercase" scope="row">${produto.categoria}</th>
            <th class="text-uppercase" scope="row">${produto.subcategoria}</th>
            <th class="text-uppercase" scope="row">${produto.descricao}</th>
            <th class="text-uppercase" scope="row">${produto.fabricante}</th>
            <th class="text-uppercase" scope="row">${produto.qtde}</th>
            <th class="text-uppercase" scope="row">${produto.preco}</th>
        </tr>  
        `
    });
}

function incluirItensTabelaClientes(){
    itensTabelaClientes.innerHTML = ""
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))
    clientesStorage.forEach(cliente => {
        itensTabelaClientes.innerHTML +=
        `
        <tr class="text-center row-table">
            <th class="text-uppercase align-middle" scope="row">${cliente.id}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.nome}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.sobrenome}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.sexo}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.dataNascimento}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.cpf}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.rg}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.profissao}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.telefone_fixo}</th>
            <th class="text-uppercase align-middle" scope="row">${cliente.telefone_celular}</th>
            <address>
            <th scope="row"><a href="mailto:${cliente.email}">${cliente.email}</a></th>
            </address>
            <th class="text-uppercase" scope="row">${cliente.dataInclusao}</th>
        </tr>  
        `
    });
}

function incluirItensTabelaEnderecos(){
    itensTabelaEnderecos.innerHTML = ""
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))
    let enderecosStorage = JSON.parse(localStorage.getItem('enderecos'))
    
    for(let i = 0; i < clientesStorage.length; i++){
        for(let j = 0; j < enderecosStorage.length; j++){
            if(clientesStorage[i].id === enderecosStorage[j].id_cliente){
                itensTabelaEnderecos.innerHTML +=
            `
            <tr class="text-center row-table">
                <th class="text-uppercase" scope="row">${enderecosStorage[j].id}</th>
                <th class="text-uppercase" scope="row">${clientesStorage[i].nome}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].endereco}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].numero}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].complemento}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].bairro}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].cidade}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].estado}</th>
                <th class="text-uppercase" scope="row">${enderecosStorage[j].cep}</th>
            </tr>  
            `
            }
        }
    }
}