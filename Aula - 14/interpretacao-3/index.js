
// Leia o c�digo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

//false
//undefined

// b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu?

//O valor impresso no console é indefinido pois não existe nenhuma propiedade com o nome "altura".