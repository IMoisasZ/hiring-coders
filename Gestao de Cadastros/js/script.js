

let tabelaProdutos = document.getElementById('tabela-produtos')
tabelaProdutos.style.display = 'none'

let tabelaClientes = document.getElementById('tabela-clientes')
tabelaClientes.style.display = 'none'

let itensTabelaProdutos = document.getElementById('itens-tabela-produtos')
let itensTabelaClientes = document.getElementById('itens-tabela-clientes')
let btnProdutos = document.querySelector('.btn-produtos')
let btnClientes = document.querySelector('.btn-clientes')


function produtos(){
    tabelaProdutos.style.display ='block'
    incluirItensTabelaProdutos()
}

function incluirItensTabelaProdutos(){
    itensTabelaProdutos.innerHTML = ""
    let produtosStorage = JSON.parse(localStorage.getItem('produtos'))
    produtosStorage.forEach(produto => {
        itensTabelaProdutos.innerHTML +=
        `
        <tr class="text-center">
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
    // let clientesStorage = JSON.parse(localStorage.getItem('clientes'))
    clientesStorage.forEach(cliente => {
        itensTabelaClientes.innerHTML +=
        `
        <tr class="text-center">
            <th class="text-uppercase" scope="row">${cliente.id}</th>
            <th class="text-uppercase" scope="row">${cliente.nome}</th>
            <th class="text-uppercase" scope="row">${cliente.sobrenome}</th>
            <th class="text-uppercase" scope="row">${cliente.nomeSocial}</th>
            <th class="text-uppercase" scope="row">${cliente.dataNascimento}</th>
            <th class="text-uppercase" scope="row">${cliente.cpf}</th>
            <th class="text-uppercase" scope="row">${cliente.rg}</th>
            <th class="text-uppercase" scope="row">${cliente.sexo}</th>
            <th class="text-uppercase" scope="row">${cliente.dataInclusao}</th>
        </tr>  
        `
    });
}