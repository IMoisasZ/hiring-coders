// objeto
const pessoa = {
    nome: "Moisés",
    idade: 38,
    cidade: 'São Bernardo do Campo'
}

// notação com ponto
console.log(pessoa.nome);

// notação com colchetes
console.log(pessoa['idade']);

// desestruturação
const {nome, idade, cidade} = pessoa
console.log(cidade);

// objetos 2
const filmes = 
[
    {
        id:1,
        titulo: "O dilema das redes",
        descricao:"Um documentario sobre tecnologia",
        duracao:120
    },
    {
        id:2,
        titulo: "US",
        descricao:"Um filme de terror legal demais",
        duracao:120
    },
    {
        id:3,
        titulo: "Corra",
        descricao:"Um filme de suspense leagl demais",
        duracao:120
    },
]

const [{ id, titulo, descricao, duracao }] = filmes
console.log(titulo);

filmes.map(filme => console.log(filme.descricao +" - "+ filme.titulo))

