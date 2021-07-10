// ALIAS
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}
// type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario[] = [{
        nome: 'Moisés',
        sobrenome: 'Santos',
        dataNascimento: new Date()
    },
    {
        nome: 'Moisas',
        sobrenome: 'Santos',
        dataNascimento: new Date()
    }
]

function tratarFuncinarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome);
        
    }
}