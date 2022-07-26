const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())
console.log(minhaString.length,minhaString.trim())

const novaFrase = minhaString.replaceAll("________","sticioso")
console.log(novaFrase)

const semEspaco = minhaString.trim()
console.log(semEspaco.length)


//B- preciso de mais opções que fiquem bonitas