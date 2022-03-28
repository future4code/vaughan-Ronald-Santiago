enum Setores{
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

type Pessoas ={
    nome: string,
    salario: number,
    presencial: true | false
    setor: Setores
}

let person =[
    
        { nome: "Marcos", salario: 2500, setor: Setores.FINANCEIRO, presencial: true },
        { nome: "Ronald", salario: 2500, setor: Setores.FINANCEIRO, presencial: true },
        { nome: "Felipe", salario: 2500, setor: Setores.FINANCEIRO, presencial: false },
        { nome: "Andre", salario: 2500, setor: Setores.FINANCEIRO, presencial: false },
 
    
] 

function empresa(pessoas:Pessoas[]):Pessoas[]{
  
    return pessoas.filter(
       (pessoa) =>{
           return pessoa.presencial
       }
    )
    
}

console.log(empresa(person))


