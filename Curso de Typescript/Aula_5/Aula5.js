"use strict";
// type Funcionarios = Array<Funcionario>
var funcionarios = [{
        nome: 'Moisés',
        sobrenome: 'Santos',
        dataNascimento: new Date()
    },
    {
        nome: 'Moisas',
        sobrenome: 'Barbosa',
        dataNascimento: new Date('15/06/2017')
    }
];
function tratarFuncinarios(functionarios) {
    for (var _i = 0, functionarios_1 = functionarios; _i < functionarios_1.length; _i++) {
        var funcionario = functionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
tratarFuncinarios()
