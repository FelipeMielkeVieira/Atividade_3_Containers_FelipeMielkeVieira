const fetch = require("node-fetch");
const crud = require("../../crud");

async function retornarProdutos() {
  const produtos = await crud.get("Products");
  return produtos;
}

async function adicionarProduto(dado) {
  if (
    dado.name == undefined ||
    dado.CPF == undefined ||
    dado.Password == undefined
  ) {
    throw new Error("Dados Inválidos!");
  }

  await fetch("http://I_A:3000/api/users", {
    method: "POST",
    body: JSON.stringify(dado),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.status == 500) {
      throw new Error("Login Inválido!");
    }
  });

  dado.userCPF = dado.CPF;
  delete dado.CPF;
  delete dado.Password;
  
  const produto = await crud.save("Products", undefined, dado);
  return produto;
}

module.exports = {
  retornarProdutos,
  adicionarProduto,
};