// campos opcionais como tipo de dado = ?
let altura: number | null = 1.6
altura = null

type Contato = {
    nome: String,
    telefone1: string,
    telefone2?: string
}

const contato: Contato  = {
    nome: 'Moisés',
    telefone1: '11954842557',
}