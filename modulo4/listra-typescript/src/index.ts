console.log("Olá Vaughan")

function pessoa(nome: string, data: string){
    let resultado1 = data.split('', 2)
    let resultado2 = data.split('//', )
    let resultado3 =data.split(' ')

   return `Olá, me chamo ${nome}, nasci no dia ${resultado1} do mês ${resultado2}, no ano de ${resultado3}`
}

console.log(pessoa("Ronald", "21/03/12"))