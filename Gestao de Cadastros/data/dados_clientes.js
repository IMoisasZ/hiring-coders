// const faker = require('faker');
// const moment  = require('moment')

let dadosCliente = [
  {
    id: 0,
    nome: 'Camille',
    sobrenome: 'Beier',
    sexo: 'F2M',
    dataNascimento: '25/10/2020',
    cpf: '3541-5949-5233-9299',
    rg: '10330900',
    profissao: 'Dynamic Optimization Facilitator',
    telefone_fixo: '232-422-9764',
    telefone_celular: '(732) 725-8701',
    email: 'Elissa_Effertz@gmail.com',
    dataInclusao: '21/07/2021'
  },
  {
    id: 1,
    nome: 'Bonnie',
    sobrenome: 'Sauer',
    sexo: 'Male to Female',
    dataNascimento: '30/06/2021',
    cpf: '6584-4481-1238-8675',
    rg: '50808048',
    profissao: 'District Brand Manager',
    telefone_fixo: '408-955-2636',
    telefone_celular: '(357) 565-2057',
    email: 'Maximillian29@yahoo.com',
    dataInclusao: '21/07/2021'
  },
  {
    id: 2,
    nome: 'Meaghan',
    sobrenome: 'Schaden',
    sexo: 'Non-binary',
    dataNascimento: '02/07/2021',
    cpf: '6759-2972-5435-7501-58',
    rg: '50215684',
    profissao: 'Customer Security Assistant',
    telefone_fixo: '467-577-5509',
    telefone_celular: '607-866-4082 x6165',
    email: 'Precious69@gmail.com',
    dataInclusao: '20/07/2021'
  },
  {
    id: 3,
    nome: 'Jayne',
    sobrenome: 'Krajcik',
    sexo: 'Neutrois',
    dataNascimento: '26/06/2021',
    cpf: '6387-9277-0522-8948',
    rg: '30316795',
    profissao: 'Lead Tactics Officer',
    telefone_fixo: '968-984-1818',
    telefone_celular: '355-229-4182',
    email: 'Aubrey36@yahoo.com',
    dataInclusao: '21/07/2021'
  },
  {
    id: 4,
    nome: 'Randi',
    sobrenome: 'Streich',
    sexo: 'Androgynous',
    dataNascimento: '05/05/2021',
    cpf: '6484-6116-5741-8156',
    rg: '19622797',
    profissao: 'Regional Response Executive',
    telefone_fixo: '776-237-9999',
    telefone_celular: '806.550.6080',
    email: 'Boyd74@yahoo.com',
    dataInclusao: '21/07/2021'
  },
  {
    id: 5,
    nome: 'Darren',
    sobrenome: 'Kautzer',
    sexo: 'Polygender',
    dataNascimento: '20/10/2020',
    cpf: '3424-925435-68093',
    rg: '60779631',
    profissao: 'Senior Creative Assistant',
    telefone_fixo: '572-816-6746',
    telefone_celular: '680-640-7793',
    email: 'Nathan_Wisozk18@gmail.com',
    dataInclusao: '20/07/2021'
  },
  {
    id: 6,
    nome: 'Osborne',
    sobrenome: 'Vandervort',
    sexo: 'Male to female trans woman',
    dataNascimento: '23/11/2020',
    cpf: '6759-7366-7407-2577',
    rg: '30633529',
    profissao: 'Forward Mobility Administrator',
    telefone_fixo: '595-280-6139',
    telefone_celular: '562-685-4964',
    email: 'Corine.Kohler@gmail.com',
    dataInclusao: '20/07/2021'
  },
  {
    id: 7,
    nome: 'Chelsey',
    sobrenome: 'Little',
    sexo: 'Transexual',
    dataNascimento: '30/12/2020',
    cpf: '5489-7606-1512-5529',
    rg: '81140071',
    profissao: 'Chief Assurance Representative',
    telefone_fixo: '992-331-7662',
    telefone_celular: '1-448-887-0845 x4818',
    email: 'Elsie.Bartell90@gmail.com',
    dataInclusao: '21/07/2021'
  },
  {
    id: 8,
    nome: 'Rosina',
    sobrenome: 'Dietrich',
    sexo: 'Transexual Man',
    dataNascimento: '11/11/2020',
    cpf: '4857-0992-1702-6390',
    rg: '96127936',
    profissao: 'Future Assurance Executive',
    telefone_fixo: '558-367-7704',
    telefone_celular: '828-392-6973',
    email: 'Mona_Mayer@yahoo.com',
    dataInclusao: '21/07/2021'
  },
  {
    id: 9,
    nome: 'Sammy',
    sobrenome: 'Hane',
    sexo: 'Cisgender Female',
    dataNascimento: '04/06/2021',
    cpf: '4003257725541',
    rg: '95252944',
    profissao: 'Chief Assurance Orchestrator',
    telefone_fixo: '601-838-3263',
    telefone_celular: '(959) 829-0891 x7505',
    email: 'Hazle22@yahoo.com',
    dataInclusao: '20/07/2021'
  },
  {
    id: 10,
    nome: 'Baby',
    sobrenome: 'Russel',
    sexo: 'Trans',
    dataNascimento: '07/04/2021',
    cpf: '3417-584571-11501',
    rg: '18486186',
    telefone_fixo: '652-704-8291',
    telefone_celular: '707-995-5300',
    email: 'Catalina20@yahoo.com',
    profissao: 'Human Solutions Director',
    dataInclusao: '21/07/2021'
  }
]

let enderecos =[
  {
    id: 0,
    id_cliente: 0,
    endereco: 'Candace Wells',
    numero: 52,
    complemento: 'a',
    bairro: 'Glens',
    cidade: 'Woodland',
    estado: 'IN',
    cep: "29048"
  },
  {
    id: 1,
    id_cliente: 1,
    endereco: 'Runolfsson Harbors',
    numero: 88,
    complemento: 'b',
    bairro: 'Flat',
    cidade: 'Urbana',
    estado: 'SC',
    cep: '39486'
  },
  {
    id: 2,
    id_cliente: 2,
    endereco: 'Watsica Springs',
    numero: 61,
    complemento: 'c',
    bairro: 'Manor',
    cidade: 'Homestead',
    estado: 'IN',
    cep: '43666'
  },
  {
    id: 3,
    id_cliente: 3,
    endereco: 'Cara Center',
    numero: 10,
    complemento: 'a',
    bairro: 'Port',
    cidade: 'Catalina Foothills',
    estado: 'IA',
    cep: '06416'
  },
  {
    id: 4,
    id_cliente: 4,
    endereco: 'Koss Burgs',
    numero: 80,
    complemento: 'c',
    bairro: 'Mountains',
    cidade: 'Chattanooga',
    estado: 'DE',
    cep: '32745-5498'
  },
  {
    id: 5,
    id_cliente: 5,
    endereco: 'Wuckert Greens',
    numero: 39,
    complemento: 'b',
    bairro: 'Corner',
    cidade: 'Toms River',
    estado: 'HI',
    cep: '27075'
  },
  {
    id: 6,
    id_cliente: 6,
    endereco: 'Dibbert Rapids',
    numero: 98,
    complemento: 'a',
    bairro: 'Prairie',
    cidade: 'Bozeman',
    estado: 'CT',
    cep: '43302-5700'
  },
  {
    id: 7,
    id_cliente: 7,
    endereco: 'Eula Divide',
    numero: 61,
    complemento: 'b',
    bairro: 'Plains',
    cidade: 'Huntersville',
    estado: 'VT',
    cep: '48177'
  },
  {
    id: 8,
    id_cliente: 8,
    endereco: 'Gleichner Village',
    numero: 74,
    complemento: 'b',
    bairro: 'Prairie',
    cidade: 'South San Francisco',
    estado: 'ND',
    cep: '04736'
  },
  {
    id: 9,
    id_cliente: 0,
    endereco: 'Dorcas Estates',
    numero: 68,
    complemento: 'a',
    bairro: 'Underpass',
    cidade: 'La Mesa',
    estado: 'NE',
    cep: '54026'
  },
  {
    id: 10,
    id_cliente: 10,
    endereco: 'Oliver Pine',
    numero: 95,
    complemento: 'a',
    bairro: 'Square',
    cidade: 'Goodyear',
    estado: 'AZ',
    cep: '41185'
  }
]


// for(let i =0; i<11; i++){

//   dadosCliente.push(
//         {
//           id: i, 
//           nome: faker.name.firstName(), 
//           sobrenome: faker.name.lastName(), 
//           sexo: faker.name.gender(),
//           dataNascimento: moment(faker.date.past()).format('DD/MM/YYYY'),
//           cpf: faker.finance.creditCardNumber(), 
//           rg: faker.finance.account(),
//           profissao: faker.name.title(), 
//           telefone_fixo: faker.phone.phoneNumberFormat(), 
//           telefone_celular: faker.phone.phoneNumber(), 
//           email: faker.internet.email(), 
//           dataInclusao: moment(faker.date.recent()).format('DD/MM/YYYY')
//       }
//     )
//   }
// console.log(dadosCliente);





localStorage.setItem("clientes",JSON.stringify(dadosCliente))

localStorage.setItem("enderecos",JSON.stringify(enderecos))