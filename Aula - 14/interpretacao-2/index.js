
// Leia o c�digo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

// Juca, 3, SRD
// Juba, 3, SRD
// Jubo, 3, SRD

// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?

//Cerve para fazer uma cópia de um objeto e mudalo da forma que preferirmos.