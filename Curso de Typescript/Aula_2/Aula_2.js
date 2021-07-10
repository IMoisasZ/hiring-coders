"use strict";
// tipos typescript
// BOOLEAN
var contapaga = false;
// NUMBER
var idade = 38; //int
var avaliacao = 4.5;
// STRING
var nome = 'Moisés';
// ARRAY
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 43, 67];
// TUPLE
var jogadores;
jogadores = ['Moisés', 'Ciclano', 'Beltrano'];
// ENUM
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// ANY
var retornoApi = [123, 'Moises', false];
var retornoApi2 = {};
// VOID
function printarNaTela(msg) {
    console.log(msg);
}
// NULL e UNDEFINED
var u = undefined;
var n = null;
// OBJECT
function criar(objeto) {
}
criar({
    propriedade: 1
});
