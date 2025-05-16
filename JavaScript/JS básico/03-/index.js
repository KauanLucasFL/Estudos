
{
  var nomePessoa = "DevEmDobro"; // Variáveis podem ter seu valor alterado. A variável var possui escopo global. Portanto, mesmo tendo sido declarada dentro de um bloco, a var pode ser exibida através do console.log abaixo, o qual foi convocado fora do bloco onde ela foi criada.

  // As variáveis const e let possuem escopo de bloco. Portanto, seus valores não serão exibidos no console.log abaixo, pois ele foi convocado fora do bloco onde elas foram criadas.

  const emailPessoa = "testeaula@gmail.com"; // Constantes não podem ter seu valor alterado.

  let telefonePessoa = "5559999999";
}

console.log(nomePessoa);
console.log(emailPessoa);
console.log(telefonePessoa);

var xpto = 1
var xyz = 2
var n1
var n2

/* usando prompts para receber dados do usuário: lembrando que aqui é necessário a criação de uma estrutura html para a exibição do prompt no navegador

const idade = prompt("Qual a sua idade?");

console.log(idade)


*/