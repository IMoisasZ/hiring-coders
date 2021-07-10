const livros = require('./database')
const readline = require('readline-sync')

// pegar o input do usuario
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')
// se for sim mostra as categorias disponiveis e pergunta qual categoria ela quer
// se for não mostra todos os livros em ordem crescente pela qtde de páginas
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log("Essas são as categorias disponiveis:")
    categorias = ['Produtividade e estilo de vida','Aprender é dificil','Outro nivel','Meu sonho']
    console.table(categorias);

    // const entradaCategoria = readline.question('Qual categoria voce escolhe? ')
    var entradaCategoria = readline.question('Digite o código da categoria que voce quer ver? ')

    // const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    const retorno = livros[entradaCategoria]
    if(retorno > livros.length || retorno < livros.length || typeof(retorno) === 'string') { 
        console.log("Escolha um dos códigos da tabela!");
        console.table(categorias)
        let sair = readline.question('Deseja sair do sistema? S/N ')
        if(sair.toLocaleUpperCase() === "S"){
            return
        }else{
            entradaCategoria = readline.question('Digite o código da categoria que voce quer ver? ')
        }
    }
    console.table(retorno);
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis')
    console.table(livrosOrdenados)
}
