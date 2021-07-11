"use strict";
// type Funcionarios = Array<Funcionario>
var funcionarios = [{
        nome: 'Moisés',
        sobrenome: 'Santos',
        dataNascimento: new Date()
    },
    {
        nome: 'Moisas',
        sobrenome: 'Santos',
        dataNascimento: new Date()
    }
];
function tratarFuncinarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
