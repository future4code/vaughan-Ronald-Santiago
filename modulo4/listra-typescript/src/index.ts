console.log("Olá Vaughan")

function pessoa(nome: string, data: string){
    let resultado1 = data.split("")
    let dia = resultado1[0]+resultado1[1]
    console.log(dia)
    let resultado2 = data.split('//', )
    let resultado3 =data.split(' ')

   return `Olá, me chamo ${nome}, nasci no dia ${resultado1} do mês ${resultado2}, no ano de ${resultado3}`
}

console.log(pessoa("Ronald", "21/03/12"))