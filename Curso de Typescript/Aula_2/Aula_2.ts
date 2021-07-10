// tipos typescript
// BOOLEAN
const contapaga: boolean = false

// NUMBER
const idade: number = 38 //int
const avaliacao: number = 4.5

// STRING
const nome: string = 'Moisés'

// ARRAY
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 43, 67]

// TUPLE
let jogadores: [string, string, string]
jogadores = ['Moisés','Ciclano','Beltrano']

// ENUM
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// ANY
const retornoApi: any[]=[123, 'Moises', false]
const retornoApi2: any = {

}

// VOID
function printarNaTela(msg: string): void{
    console.log(msg);
}

// NULL e UNDEFINED
const u: undefined = undefined
const n: null = null

// OBJECT
function criar(objeto: object){

}
criar({
    propriedade: 1
})