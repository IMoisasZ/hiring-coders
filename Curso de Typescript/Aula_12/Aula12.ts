// herença
class Carro1 {
    private velocidadeAtual: number = 0

    constructor (public marca: string, public modelo: string, private velocidadeMaxima: number = 220){}

    private alterarVelocidade(delta: number){
        // FACO AS VALIDAÇÕES DE ACELERACAO E FRENAGEM
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    };

    acelerar() {
        this.alterarVelocidade(5)
    }
    
    frear() {
        this.alterarVelocidade(-5)
    }
}
const carro1 = new Carro ('NISSAN','SENTRA', 250);
carro1.acelerar();
carro1.frear()

// herança
class Camaro extends Carro1 {
    private turbo = false
    constructor(){
        super('Chevrolet','Camaro',500)
    }

    ligarTurbo(){
        this.turbo = true
    }
}

let camaro = new Camaro();
camaro.acelerar()
camaro.frear()
camaro.ligarTurbo()

