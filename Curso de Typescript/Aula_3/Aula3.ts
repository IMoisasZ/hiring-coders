// tipo never

// NEVER
function loopinpInfinito(): never{
    while(true){

    }
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha():never{
    return erro('Algo falhou')
}