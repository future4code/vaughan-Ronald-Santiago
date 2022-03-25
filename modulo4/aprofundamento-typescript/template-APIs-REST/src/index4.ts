type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a - Para poder fazer a transpilação eu iria ter de simplesmente escrever
//"start": "tsc index.ts && node ./build/index.js"

//b b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
//Sim, eu colocaria tsc ./src/index.ts && node ./build/index.js"

//Exercicio 5 - O que mudou é basicamente que ali é que tem muito mais códigos que não estão sendo usados
