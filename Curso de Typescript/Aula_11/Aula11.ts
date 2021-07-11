// modificadores de acesso
class Carro {
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

const carro = new Carro ('NISSAN','SENTRA', 250);
carro.acelerar();
carro.frear()