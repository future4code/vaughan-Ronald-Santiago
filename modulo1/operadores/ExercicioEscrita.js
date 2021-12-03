const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 //Como um é falso, então no 'e' já é todo falso
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 //Como aqui tem dois verdadeiros, então é verdadeirp
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)   //O resultado é verdadeiro pois verdadeiro com verdadeiro é isso

console.log("d. ", typeof resultado) //Vai sair number

//EXERCIO 2

let primeiroNumero = prompt("Digite um numero!")  //Vai dar ruim porque não está se usando o number
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
