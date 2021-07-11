// interfaces - apenas typescript
// são utlizados bem paracidamente com os types
interface Usuario {
    nome: string,
    email: string,
    address?: string
}

function getUser() : Usuario{
    return {
        nome: 'Moises',
        email: 'mopri08@gmail.com'
    }
}

function setUser(usuario:Usuario) {

}