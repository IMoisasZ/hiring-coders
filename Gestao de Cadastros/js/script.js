<<<<<<< HEAD
let listaProdutos = [
        // tecnologia
        {id: 0, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook Acer Nitro Gamer AN515-55-59MT Intel Core I5 16GB 512GB SSD 15.6' Windows 10", fabricante: "accer", qtde:100, imagem: '/img/tecnologia/noteboks/notebook_acer.jpg', preco: "R$ 3.850,00"},
        {id: 1, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook HP 256 G8 Intel Core i3 8GB 256GB SSD - 15,6&quot; LCD Windows 10", fabricante: "hp", qtde:100, imagem: '/img/tecnologia/noteboks/notebook_hp_.jpg', preco: "R$ 3.050,00"},
        {id: 2, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Xiaomi Redmi Note 10 4GB+64GB Versão global Onyx Gray", fabricante: "xiaomi", qtde:100, imagem: '/img/tecnologia/celulares/xaomi_note_10.jpg', preco: "R$ 1.250,00"},
        {id: 3, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Celular Smartphone K22+ 64GB 6,2 LG - Vermelho", fabricante: "lg", qtde:100, imagem: '/img/tecnologia/celulares/celular-smartphone-k22-64gb-6-2-lg_397369.jpg', preco: "R$ 2.150,00"},
        {id: 4, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Relógio Amazfit GTS A1914 - Preto", fabricante: "amazfit", qtde:100, imagem: '/img/tecnologia/smart_whatches/smart_whatch_amazfit_bip_u+pro.jpg', preco: "R$ 420,00"},
        {id: 5, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Galaxy Watch Active2 Preto", fabricante: "sansumg", qtde:100, imagem: '../img/tecnologia/smart_whatches/5187V2FMXML._AC_SL1000_.jpg', preco: "R$ 235,99"},
        {id: 6, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Apple iPad 8ª Geração 10.2, Wi-Fi, 128GB Silver - A2270", fabricante: "apple", qtde:100, imagem: '/img/tecnologia/tablets/apple_ipad.jpg', preco: "R$ 3.330,00"},
        {id: 7, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Tablet Samsung Galaxy A7 64GB Wi-Fi 4G Tela 10.4” Android Octa-Core 2.0GHz - Grafite", fabricante: "samsung", qtde:100, imagem: '/img/tecnologia/tablets/tablet_samsung.jpg', preco: "R$ 1.296,28"},
        // ccasa
        {id: 8, categoria: "Casa", subcategoria: "Cama", descricao: "Cama Casal Madri Espresso Móveis Canion Hf", fabricante: "Espresso Móveis", qtde:100, imagem: '/img/casa/camas/cama_ecoflex.jpg', preco: "R$ 555,44"},
        {id: 9, categoria: "Casa", subcategoria: "Cama", descricao: "Colchão Cama Box Magnético Casal Massageador Cabeceira", fabricante: "Eco Dream", qtde:100, imagem: '/img/casa/camas/cama.jpg', preco: "R$ 2.196,00"},
        {id: 10, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofá Berlim Retrátil Reclinável Chaise e Canto - 5 Lugares 2.70 M- 1 Tok Estofados", fabricante: "Tok Estofados", qtde:100, imagem: '/img/casa/sofas/sofa_berlim.jpg', preco: "R$ 2.789,10"},
        {id: 11, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofa 4 Lugares Retratil e Reclinavel com Bau Linoforte Artemis", fabricante: "Tok Estofados", qtde:100, imagem: '/img/casa/sofas/sofa_linoforte.jpg', preco: "R$ 1.679,00"},
        {id: 12, categoria: "Casa", subcategoria: "Mesa", descricao: "Mesa de Jantar 6 Cadeiras Retangular Rufato - Alvorada Londrina", fabricante: "Rufato", qtde:100, imagem: '/img/casa/mesas/mesa_rufato.jpg', preco: "R$ 1.899,99"},
        {id: 13, categoria: "Casa", subcategoria: "Mesa", descricao: "Conjunto Laguna de madeira mesa 120X70 com 4 cadeiras imbuia estofado marrom", fabricante: "Imbuia", qtde:100, imagem: '/img/casa/mesas/mesa_imbuia.jpg', preco: "R$ 849,97"},
        // ferramentas
        {id: 14, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "DEWALT Mala de Ferramentas Multitak com 37 Compartimentos DWST82928-LA", fabricante: "dewalt", qtde:100, imagem: '/img/ferramentas/mala_de_ferrmanetas_multipak.jpg', preco: "R$ 459,48"},
        {id: 15, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "Organizador de Ferramentas Dewalt TSTAK Nº4 DWST17804 16.5 com Duas Gavetas", fabricante: "tstak", qtde:100, imagem: '/img/ferramentas/organizador_tstak.jpg', preco: "R$ 392,07"},
        // moda
        {id: 15, categoria: "Moda", subcategoria: "Vestidos", descricao: "Vestido Godê Rodado Midi Moda Evangélica", fabricante: "Puro Glamour", qtde:100, imagem: '/img/moda/vestidos/vestido_evangelica.jpg', preco: "R$ 99,00"},
        {id: 16, categoria: "Moda", subcategoria: "Sapatos", descricao: "Sapato Feminino Oxford Branco em Couro Salto Tratorado 19000", fabricante: "Oxford", qtde:100, imagem: '/img/moda/sapatos/sapato_oxford.jpg', preco: "R$ 159,99"},
        // produtos de beleza
        {id: 17, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Máscara Capilar Match SOS Reconstrução, 250g", fabricante: "Match", qtde:100, imagem: '/img/produtos_beleza/mascara_capilar.png', preco: "R$ 57,90"},
        {id: 18, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Yenzah Cronograma Capilar 3 Em 1 - Máscara de Tratamento", fabricante: "Yenzah", qtde:100, imagem: '/img/produtos_beleza/mascara_capilar_1.jpg', preco: "R$ 19,80"},
        {id: 19, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Máscara Capilar Eico Tratamento Mandioca 500g", fabricante: "Ikesaki", qtde:100, imagem: '/img/produtos_beleza/mascara_capilar_2.png', preco: "R$ 19,90"},
        {id: 20, categoria: "Produtos de Beleza", subcategoria: "Kit Maquiagem", descricao: "Kit 10 Pinceis Kabuki Para Maquiagem Preto Com Dourado", fabricante: "On Line", qtde:100, imagem: '/img/produtos_beleza/kit_maquiagem.jpg', preco: "R$ 31,20"},
        {id: 21, categoria: "Produtos de Beleza", subcategoria: "Kit Maquiagem", descricao: "Glitter p/ pele em pó Color Make c/ 10 cores Yur BT 1 KT", fabricante: "Yur", qtde:100, imagem: '/img/produtos_beleza/kit_maquiagem_1.jpg', preco: "R$ 18,90"},
        // brinquedos
        {id: 22, categoria: "Brinquedos", subcategoria: "Pula Pula", descricao: "Cama Elástica 3,05m - Completa, Colorida e Importada", fabricante: "Lacuca brinquedos", qtde:100, imagem: '/img/brinquedos/pula_pula/pula_pula.jpg', preco: "R$ 1.599,00"},
        {id: 23, categoria: "Brinquedos", subcategoria: "Pula Pula", descricao: "Pula Pula Inflável Infantil Com Cesta De Basquete Intex", fabricante: "Intex", qtde:100, imagem: '/img/brinquedos/pula_pula/pula_pula_1.jpg', preco: "R$ 649,99"},
        {id: 24, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina de Bolinhas Premium - Medidas 1,10m X 1,10m - Acompanha 500 Bolinhas TOP Coloridas", fabricante: "Lacuca Brinquedos", qtde:100, imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha.jpg', preco: "R$ 789,00"},
        {id: 25, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina de Bolinhas 3m com 5.000 Bolinhas 1,90 X 3,00(L) X 3,00 (A)", fabricante: "Lacuca Brinquedos", qtde:100, imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha_1.jpg', preco: "R$ 3.499,00"},
        {id: 26, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina De Bolinha + 200 Bolinhas + Piscina De Água 70 L", fabricante: "Company kids", qtde:100, imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha_2.jpg', preco: "R$ 399,49"}
]
=======

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
>>>>>>> 7d4da54f310c6772d90042f54d549f76ffcb3015
