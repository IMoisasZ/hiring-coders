let dadosCliente = [
    {id: 0, nome: "Moisés", sobrenome: "Santos", nomeSocial: "" , dataNascimento:"10/09/1982" , cpf: "111.111.111-11", rg: "11.111.111-1", sexo: "M",dataInclusao: "01/07/2021"},
    {id: 1, nome: "Eduado", sobrenome: "Pacheco", nomeSocial: "", dataNascimento:"16/10/1970" , cpf: "222.222.222-22", rg: "22.222.222-2", sexo: "M",dataInclusao: "04/07/2021"},
    {id: 2, nome: "Cleiton", sobrenome: "Trigo", nomeSocial: "", dataNascimento: "16/07/1980", cpf: "333.333.333-33", rg: "33.333.333-3", sexo: "M",dataInclusao: "06/07/2021"},
    {id: 3, nome: "Priscila", sobrenome: "Santos", nomeSocial: "", dataNascimento:"28/03/1984" , cpf: "444.444.444-44", rg: "44.444.444.4", sexo: "F",dataInclusao: "08/07/2021"},
    {id: 4, nome: "Vanessa", sobrenome: "Brinaldo", nomeSocial: "", dataNascimento:"13/05/1986" , cpf: "555.555.555-55", rg: "55.555.555.5", sexo: "F",dataInclusao: "11/07/2021"},
    {id: 5, nome: "Ivy", sobrenome: "Santos", nomeSocial: "", dataNascimento:"15/06/1985", cpf: "666.666.666-66", rg: "66.666.666.6", sexo: "F",dataInclusao: "11/07/2021"},
    {id: 6, nome: "Zoe", sobrenome: "Santos", nomeSocial: "", dataNascimento:"15/06/1990", cpf: "777.777.777-77", rg: "77.777.777.7", sexo: "F",dataInclusao: "13/07/2021"},
    {id: 7, nome: "João", sobrenome: "Santos", nomeSocial: "", dataNascimento:"01/02/1942", cpf: "888.888.888-88", rg: "88.888.888.8", sexo: "M",dataInclusao: "17/07/2021"},
    {id: 8, nome: "Maria", sobrenome: "Santos", nomeSocial: "", dataNascimento:"12/11/1949", cpf: "999.999.999-99", rg: "99.999.999.9", sexo: "F",dataInclusao: "17/07/2021"},
    {id: 9, nome: "Mydian", sobrenome: "Santos", nomeSocial: "", dataNascimento:"25/05/1983", cpf: "100.100.100-10", rg: "10.100.100.0", sexo: "F",dataInclusao: "19/07/2021"},
    {id: 10, nome: "Eduardo", sobrenome: "Guerreiro", nomeSocial: "", dataNascimento:"14/02/1973", cpf: "101.101.101-00", rg: "10.101.101.0", sexo: "M",dataInclusao: "20/07/2021"},
]

localStorage.setItem("clientes",JSON.stringify(dadosCliente))