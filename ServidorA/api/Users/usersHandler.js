const crud = require("../../crud");

async function retornarUsuarios() {
    const listaUsuarios = await crud.get("Users");
    return listaUsuarios;
}

async function retornarUsuario(dado) {
    const listaUsuarios = await crud.get("Users");
    for (const usuario of listaUsuarios) {
        if(dado.CPF == usuario.CPF && dado.Password == usuario.Password) {
            return usuario;
        }
    }
    throw new Error("Usuário não encontrado");
}

async function adicionarUsuario(dado) {

    if(dado.CPF == undefined || dado.Password == undefined) {
        throw new Error("Dados Inválidos!");
    }

    const usuario = await crud.save("Users", undefined, dado);
    return usuario;
}

module.exports = {
    retornarUsuarios,
    retornarUsuario,
    adicionarUsuario
}