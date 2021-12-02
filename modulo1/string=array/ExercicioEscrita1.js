let array
console.log('a. ', array) //0 pois aqui vai ler o primeiro valor

array = null
console.log('b. ', array)   //aqui acredito ser 1

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)   //Aqui pela numeração é o 5

let i = 0
console.log('d. ', array[i]) //aqui acredito ser 0

array[i+1] = 19
console.log('e. ', array) //Aqui eu penso que é 20 pela soma 

const valor = array[i+6]       //Aqui penso que o valor é 5
console.log('f. ', valor)

//Exercicio2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)  //As letras vão vir em maiusculo 

