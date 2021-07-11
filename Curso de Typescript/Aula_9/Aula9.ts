// Classes
// class Data {
//     public dia: number;
//     public mes: number;
//     public ano: number;

//     constructor(dia:number, mes:number, ano:number = 1970){
//         this.dia = dia,
//         this.mes = mes,
//         this.ano = ano
//     }
// }

class Data {
    constructor(public dia:number, public mes:number, public ano:number = 1970){
    }
}

const data = new Data(1,1,2020)
console.log(data.dia);

const data2 = new Data(1,1)

