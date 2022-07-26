const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair"
const novaFrase = frase.replace("verde","rosa").replace("Azul","Laranja")// aqui vc pode criar um ponto replace

const includeNovaFra = frase.includes("verde","laranja")
const extra = " mas não deixe o gato sair\""

console.log(frase)
console.log(novaFrase)
console.log(includeNovaFra)

const fraseExtra =`Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDA${extra.toLocaleUpperCase()}`

console.log(fraseExtra)

// consigo usar dois replace na mesma frase, mais não consigo colocar dois include. Para fazer o exercicio EXTRA criei uma variavel para a frase solicitada e pedindo para ficar em maiusculo
